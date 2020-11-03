import Head from 'next/head';
import React from 'react';

const Seo = ({ metas, title, path, og_image }) => {

   return (
        <Head>
            <title>{ title }</title>
            <meta name="description" content={ metas.description } />
            <meta name="keywords" content={ metas.keywords ? metas.keywords.join(', ') : null }/>
            <meta property="og:title" content={ title } />
            <meta property="og:image" content={ og_image } />
            <meta property="og:url" content={ 'https://www.fredcorr.com' + path } />
            <meta property="og:description" content={ metas.description } />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:description" content={ metas.description } />
            <meta name="twitter:title" content={ title } />
            <meta name="twitter:site" content="@FedericoCorra16" />
            <meta name="twitter:image" content={ metas.og_image } />
            <meta name="twitter:creator" content="@FedericoCorra16" />
        </Head>
    )
}

export default Seo;