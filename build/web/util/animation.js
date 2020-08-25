export const transition = {
    ease: "easeInOut",
    type: "tween",
    duration: 0.65
}

export const fade = {
    hidden: {
        opacity: 0,
        transition
    },
    show: {
        opacity: 1,
        transition
    }
};

export const slideX = ( dir ) => {

    return {
        hidden: {
            x: dir,
            opacity: 0,
            transition
        },
        show: i => ({
            x: 0,
            opacity: 1,
            transition: {
                ...transition,
                delay: i + 0
            }
        })
    }
};

export const slideY = ( dir ) => {

    return {
        hidden: {
            y: dir,
            opacity: 0,
            transition
        },
        show: i => ({
            y: 0,
            opacity: 1,
            transition: {
                ...transition,
                delay: i + 0
            }
        })
    }
};

export const scaleUp = {
    hidden: {
        opacity: 0,
        transition,
        scale: 0.95,
        y: 100
    },
    show: i => ({
        opacity: 1,
        scale: 1,
        y: 0,
        transition: {
            ...transition,
            delay: i + 0
        }
    })
};