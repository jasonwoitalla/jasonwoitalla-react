import * as React from 'react';

export const onRenderBody = ({ setHeadComponents }) => {
    setHeadComponents([
        <link rel="preload"
            href="/fonts/Sequel-Sans-Heavy-Disp.otf"
            as="font"
            type="font/otf"
            crossOrigin="anonymous"
            key="SequelSansHeavyDisp"
        />,
    ]);
}
