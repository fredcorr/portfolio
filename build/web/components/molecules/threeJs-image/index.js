import { useSpring, animated as anim } from 'react-spring/three.cjs.js'
import React, { useState, useCallback, useMemo } from 'react'
import { vertexShader, fragmentShader } from './shaders'
import { Canvas, useThree } from 'react-three-fiber'
import { slideY } from '_utils/animation'
import { motion } from 'framer-motion'
import * as THREE from 'three'

const loader = new THREE.TextureLoader()

const Image = (props) => {
  const [hovered, setHover] = useState(false)
  const hover = useCallback(() => setHover(true), [])
  const unhover = useCallback(() => setHover(false), [])

  return (
    <motion.div
      animate={props.trigger ? 'show' : 'hidden'}
      className={props.style}
      onMouseEnter={hover}
      onMouseLeave={unhover}
      onTouchStart={hover}
      onTouchEnd={unhover}
      onTouchCancel={unhover}
      variants={slideY(100)}
      initial="hidden"
      exit="hidden"
    >
      <Canvas
        invalidateFrameloop={true}
        props={{ antialias: false, stencil: false }}
      >
        <ImageWebgl {...props} hovered={hovered} />
      </Canvas>
      <img src={props.url} alt="" />
      <p>View project</p>
    </motion.div>
  )
}

const ImageWebgl = ({ url, disp, intensity, hovered }) => {
  const { progress } = useSpring({ progress: hovered ? 1 : 0 })
  const { invalidate } = useThree()
  const args = useMemo(() => {
    const texture1 = loader.load(url, invalidate)
    const texture2 = loader.load(url, invalidate)
    const dispTexture = loader.load(disp, invalidate)

    dispTexture.wrapS = dispTexture.wrapT = THREE.RepeatWrapping
    texture1.magFilter = texture2.magFilter = THREE.LinearFilter
    texture1.minFilter = texture2.minFilter = THREE.LinearFilter

    return {
      uniforms: {
        effectFactor: { type: 'f', value: intensity },
        dispFactor: { type: 'f', value: 0 },
        texture1: { type: 't', value: texture1 },
        texture2: { type: 't', value: texture2 },
        disp: { type: 't', value: dispTexture },
      },
      vertexShader,
      fragmentShader,
    }
  }, [url, disp, intensity, invalidate])

  return (
    <mesh>
      <planeBufferGeometry name="geometry" args={[16, 9]} />
      <anim.shaderMaterial
        name="material"
        args={[args]}
        uniforms-dispFactor-value={progress}
      />
    </mesh>
  )
}

export default Image
