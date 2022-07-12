interface IconsProps {
    height?: number;
    width?: number;
    className?: string;
    fillColor1?: string;
    fillColor2?: string;
}

export const HomeIcon = ({ height, width, className }: IconsProps) => {
    return (
        <svg
            width={width}
            height={height}
            className={className}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 460.298 460.297"
            enableBackground="new 0 0 460.298 460.297"
        >
            <g>
                <g>
                    <path
                        d="M230.149,120.939L65.986,256.274c0,0.191-0.048,0.472-0.144,0.855c-0.094,0.38-0.144,0.656-0.144,0.852v137.041
			c0,4.948,1.809,9.236,5.426,12.847c3.616,3.613,7.898,5.431,12.847,5.431h109.63V303.664h73.097v109.64h109.629
			c4.948,0,9.236-1.814,12.847-5.435c3.617-3.607,5.432-7.898,5.432-12.847V257.981c0-0.76-0.104-1.334-0.288-1.707L230.149,120.939
			z"
                    />
                    <path
                        d="M457.122,225.438L394.6,173.476V56.989c0-2.663-0.856-4.853-2.574-6.567c-1.704-1.712-3.894-2.568-6.563-2.568h-54.816
			c-2.666,0-4.855,0.856-6.57,2.568c-1.711,1.714-2.566,3.905-2.566,6.567v55.673l-69.662-58.245
			c-6.084-4.949-13.318-7.423-21.694-7.423c-8.375,0-15.608,2.474-21.698,7.423L3.172,225.438c-1.903,1.52-2.946,3.566-3.14,6.136
			c-0.193,2.568,0.472,4.811,1.997,6.713l17.701,21.128c1.525,1.712,3.521,2.759,5.996,3.142c2.285,0.192,4.57-0.476,6.855-1.998
			L230.149,95.817l197.57,164.741c1.526,1.328,3.521,1.991,5.996,1.991h0.858c2.471-0.376,4.463-1.43,5.996-3.138l17.703-21.125
			c1.522-1.906,2.189-4.145,1.991-6.716C460.068,229.007,459.021,226.961,457.122,225.438z"
                    />
                </g>
            </g>
        </svg>
    );
};

export const VideoCameraIcon = ({ height, width, className }: IconsProps) => {
    return (
        <svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            width={width}
            height={height}
            className={className}
            viewBox="0 0 467.968 467.968"
            enableBackground="new 0 0 467.968 467.968"
        >
            <g>
                <g>
                    <path
                        d="M264.704,96.512H51.2c-28.16,0-51.2,23.04-51.2,51.2v172.544c0,28.16,23.04,51.2,51.2,51.2h213.504
                    c28.16,0,51.2-23.04,51.2-51.2V147.712C315.904,119.04,292.864,96.512,264.704,96.512z"
                    />
                </g>
            </g>
            <g>
                <g>
                    <path
                        d="M430.08,124.672c-3.072,0.512-6.144,2.048-8.704,3.584l-79.872,46.08V293.12l80.384,46.08
                    c14.848,8.704,33.28,3.584,41.984-11.264c2.56-4.608,4.096-9.728,4.096-15.36V154.368
                    C467.968,135.424,450.048,120.064,430.08,124.672z"
                    />
                </g>
            </g>
        </svg>
    );
};

export const SearchIcon = ({ height, width, className }: IconsProps) => {
    return (
        <svg
            width={width}
            height={height}
            className={className}
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            viewBox="0 0 512.005 512.005"
            enableBackground="new 0 0 512.005 512.005"
        >
            <g>
                <g>
                    <path
                        d="M505.749,475.587l-145.6-145.6c28.203-34.837,45.184-79.104,45.184-127.317c0-111.744-90.923-202.667-202.667-202.667
			S0,90.925,0,202.669s90.923,202.667,202.667,202.667c48.213,0,92.48-16.981,127.317-45.184l145.6,145.6
			c4.16,4.16,9.621,6.251,15.083,6.251s10.923-2.091,15.083-6.251C514.091,497.411,514.091,483.928,505.749,475.587z
			 M202.667,362.669c-88.235,0-160-71.765-160-160s71.765-160,160-160s160,71.765,160,160S290.901,362.669,202.667,362.669z"
                    />
                </g>
            </g>
        </svg>
    );
};

export const CloseIcon = ({ height, width, className }: IconsProps) => {
    return (
        <svg
            width={width}
            height={height}
            className={className}
            viewBox="0 0 32 32"
            xmlns="http://www.w3.org/2000/svg"
            data-name="Layer 2"
        >
            <path d="m16 2a14 14 0 1 0 14 14 14 14 0 0 0 -14-14zm7.414 20-1.414 1.414-6-6-6 6-1.414-1.414 6-6-6-6 1.414-1.414 6 6 6-6 1.414 1.414-6 6z" />
        </svg>
    );
};

export const LoadingIcon = ({ height, width, className }: IconsProps) => {
    return (
        <svg
            width={width}
            height={height}
            className={className}
            viewBox="-10 0 512 512"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path d="m245.675781 0c-24.8125 0-45 20.1875-45 45s20.1875 45 45 45 45-20.1875 45-45-20.1875-45-45-45zm0 0" />
            <path d="m121.679688 130.300781c9.546874 0 18.683593-2.972656 26.425781-8.597656 20.074219-14.585937 24.539062-42.78125 9.953125-62.855469-8.4375-11.617187-22.058594-18.550781-36.429688-18.550781-9.546875 0-18.683594 2.972656-26.425781 8.59375-9.722656 7.066406-16.113281 17.496094-17.996094 29.367187-1.878906 11.871094.976563 23.765626 8.042969 33.488282 8.4375 11.617187 22.058594 18.554687 36.429688 18.554687zm0 0" />
            <path d="m31.097656 233.59375c4.515625 1.46875 9.195313 2.210938 13.914063 2.210938 19.550781 0 36.746093-12.5 42.789062-31.101563 3.714844-11.429687 2.753907-23.625-2.699219-34.335937-5.457031-10.710938-14.757812-18.652344-26.191406-22.367188-4.515625-1.46875-9.195312-2.210938-13.910156-2.210938-19.550781 0-36.746094 12.5-42.792969 31.101563-7.667969 23.601563 5.292969 49.035156 28.890625 56.703125zm0 0" />
            <path d="m85.101562 341.632812c5.453126-10.710937 6.414063-22.90625 2.699219-34.335937-6.042969-18.601563-23.238281-31.101563-42.789062-31.101563-4.71875 0-9.398438.742188-13.914063 2.210938-23.597656 7.667969-36.558594 33.105469-28.890625 56.703125 6.042969 18.601563 23.238281 31.101563 42.792969 31.101563 4.714844 0 9.394531-.742188 13.910156-2.210938 11.433594-3.714844 20.734375-11.65625 26.191406-22.367188zm0 0" />
            <path d="m148.105469 390.296875c-7.742188-5.625-16.878907-8.597656-26.425781-8.597656-14.371094 0-27.992188 6.9375-36.429688 18.554687-7.066406 9.722656-9.921875 21.617188-8.042969 33.488282 1.882813 11.871093 8.273438 22.300781 17.996094 29.367187 7.742187 5.621094 16.878906 8.59375 26.425781 8.59375 14.371094 0 27.988282-6.933594 36.433594-18.550781 14.582031-20.074219 10.117188-48.269532-9.957031-62.855469zm0 0" />
            <path d="m245.675781 422c-24.8125 0-45 20.1875-45 45s20.1875 45 45 45 45-20.1875 45-45-20.1875-45-45-45zm0 0" />
            <path d="m369.675781 381.699219c-9.546875 0-18.6875 2.972656-26.425781 8.597656-20.074219 14.585937-24.539062 42.78125-9.957031 62.855469 8.441406 11.617187 22.058593 18.550781 36.433593 18.550781 9.546876 0 18.683594-2.972656 26.421876-8.59375 9.726562-7.066406 16.117187-17.496094 17.996093-29.367187 1.882813-11.871094-.972656-23.765626-8.039062-33.488282-8.441407-11.617187-22.058594-18.554687-36.429688-18.554687zm0 0" />
            <path d="m460.257812 278.40625c-4.515624-1.46875-9.195312-2.210938-13.914062-2.210938-19.550781 0-36.746094 12.5-42.789062 31.101563-3.714844 11.429687-2.757813 23.625 2.699218 34.335937 5.457032 10.710938 14.757813 18.652344 26.191406 22.367188 4.511719 1.46875 9.191407 2.210938 13.910157 2.210938 19.550781 0 36.746093-12.5 42.792969-31.101563 7.667968-23.601563-5.292969-49.035156-28.890626-56.703125zm0 0" />
            <path d="m446.34375 235.804688c4.71875 0 9.398438-.742188 13.914062-2.210938 23.597657-7.664062 36.558594-33.101562 28.890626-56.703125-6.046876-18.601563-23.242188-31.101563-42.792969-31.101563-4.714844 0-9.394531.746094-13.910157 2.210938-11.433593 3.714844-20.734374 11.65625-26.191406 22.367188-5.453125 10.710937-6.414062 22.90625-2.699218 34.335937 6.042968 18.601563 23.238281 31.101563 42.789062 31.101563zm0 0" />
        </svg>
    );
};

export const ChatIcon = ({ height, width, className }: IconsProps) => {
    return (
        <svg
            id="svg3404"
            width={width}
            height={height}
            className={className}
            viewBox="0 0 16.933333 16.933333"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                id="comm-17_chat"
                d="m4.2126504.52894725c-2.0315977 0-3.67192175 1.64797845-3.6752264 3.68297885l-.008255 5.0901277c-.003201 1.9452012 1.5044023 3.5190432 3.4101271 3.6571422v3.180167a.26460979.26460891 0 0 0 .4521676.187069l3.3326149-3.340881h5.0053794c2.031598 0 3.674711-1.647579 3.674711-3.6829782v-5.0901282c-.000014-2.0347013-1.634858-3.68349735-3.666456-3.68349735zm1.6086878 5.43532745c.4352343 0 .7932367.3585501.793234.79375-.0000079.4351998-.3580077.7937499-.793234.7937499s-.7937447-.3585501-.79375-.7937499c-.0000026-.4351999.3585184-.79375.79375-.79375zm2.6453173 0c.4352317 0 .7937527.3585501.79375.79375-.0000053.4351998-.3585236.7937499-.79375.7937499-.4352289 0-.7937447-.3585501-.7937499-.7937499-.0000027-.4351999.358513-.79375.7937499-.79375zm2.6463495 0c.435234 0 .793755.3585501.79375.79375-.000005.4351998-.358524.7937499-.79375.7937499-.435224 0-.794261-.3585501-.794266-.7937499-.000003-.4351999.359034-.79375.794266-.79375z"
                font-variant-ligatures="normal"
                font-variant-position="normal"
                font-variant-caps="normal"
                font-variant-numeric="normal"
                font-variant-alternates="normal"
                font-feature-settings="normal"
                text-indent="0"
                text-align="start"
                text-decoration-line="none"
                text-decoration-style="solid"
                text-decoration-color="rgb(0,0,0)"
                text-transform="none"
                text-orientation="mixed"
                white-space="normal"
                shape-padding="0"
                mix-blend-mode="normal"
                solid-color="rgb(0,0,0)"
                solid-opacity="1"
                vectorEffect="none"
                paintOrder="fill markers stroke"
            />
        </svg>
    );
};

export const NotificationIcon = ({ height, width, className }: IconsProps) => {
    return (
        <svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            width={width}
            height={height}
            className={className}
            viewBox="0 0 512 512"
            enableBackground="new 0 0 512 512"
        >
            <g>
                <g>
                    <g>
                        <path
                            d="M191.132,469.361C202.252,494.367,226.91,512,256.012,512c29.102,0,53.76-17.633,64.881-42.639
                        c-20.521,1.004-41.861,1.679-64.881,1.679C232.993,471.04,211.653,470.364,191.132,469.361z"
                        />
                        <path
                            d="M481.886,360.96c-26.993-34.038-72.294-100.946-72.294-166.4c0-64.901-41.697-123.29-102.4-144.753
                        C306.455,22.2,283.763,0,256.012,0c-27.771,0-50.442,22.2-51.18,49.807c-60.723,21.463-102.42,79.852-102.42,144.753
                        c0,65.475-45.281,132.362-72.294,166.4c-9.011,11.366-11.797,26.378-7.434,40.161c4.26,13.455,14.868,23.88,28.385,27.853
                        c23.675,6.984,62.484,14.848,121.672,18.862c25.62,1.72,53.166,2.724,83.272,2.724c30.085,0,57.631-1.004,83.251-2.724
                        c59.208-4.014,97.997-11.878,121.692-18.862c13.517-3.973,24.105-14.397,28.365-27.853
                        C493.683,387.338,490.877,372.326,481.886,360.96z"
                        />
                    </g>
                </g>
            </g>
        </svg>
    );
};

export const UsersIcon = ({ height, width, className, fillColor1, fillColor2 }: IconsProps) => {
    return (
        <svg
            enableBackground="new 0 0 512 512"
            width={width}
            height={height}
            className={className}
            viewBox="0 0 512 512"
            xmlns="http://www.w3.org/2000/svg"
        >
            <g>
                <g className={fillColor1}>
                    <g>
                        <path d="m150 301c-49.626 0-90-40.374-90-90s40.374-90 90-90 90 40.374 90 90-40.374 90-90 90z" />
                    </g>
                </g>
                <g className={fillColor1}>
                    <g>
                        <path d="m300 481h-300v-30c0-82.71 67.29-150 150-150 85.978 0 150 70.236 150 150z" />
                    </g>
                </g>
                <g className={fillColor2}>
                    <g>
                        <path d="m362 211c-49.626 0-90-40.374-90-90s40.374-90 90-90 90 40.374 90 90-40.374 90-90 90z" />
                    </g>
                </g>
            </g>
            <path
                className={fillColor2}
                d="m362 211c-56.778 0-106.481 31.663-131.933 78.593 17.904 8.889 34.349 20.832 48.688 35.587 18.528 19.066 32.386 41.49 40.989 65.819h192.256v-30c0-82.709-67.29-149.999-150-149.999z"
            />
        </svg>
    );
};

export const DownwardIcon = ({ height, width, className }: IconsProps) => {
    return (
        <svg
            width={width}
            height={height}
            className={className}
            enableBackground="new 0 0 64 64"
            viewBox="0 0 64 64"
            xmlns="http://www.w3.org/2000/svg"
        >
            <g id="Arrow-13">
                <path d="m54.9210777 20.296875c-.15625-.3701172-.5185547-.6108398-.9208984-.6108398l-44 .0004883c-.4018555 0-.7646484.2407227-.9213867.6108398-.15625.3701172-.0756836.7983398.2045898 1.0864258l22 22.6274414c.1879883.1933594.4467773.3027344.7167969.3027344s.5288086-.109375.7167969-.3027344l22-22.6279297c.2802734-.2885742.3603515-.7163086.2041015-1.0864258z" />
            </g>
        </svg>
    );
};

export const SavedIcon = ({ height, width, className }: IconsProps) => {
    return (
        <svg
            width={width}
            height={height}
            className={className}
            enableBackground="new 0 0 511.958 511.958"
            viewBox="0 0 511.958 511.958"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path d="m400.579 0h-289.2c-25.487 0-47.133 20.556-47.133 47.133v427.63c.075 33.733 41.277 49.561 64.701 25.882l110.235-110.204c8.834-9.216 24.76-9.216 33.594 0l110.235 110.204c23.434 23.688 64.631 7.836 64.701-25.882v-427.63c0-26.577-21.646-47.133-47.133-47.133z" />
        </svg>
    );
};

export const HistoryIcon = ({ height, width, className }: IconsProps) => {
    return (
        <svg width={width} height={height} className={className} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
            <g id="Ikon">
                <path d="m30 16a14 14 0 0 1 -28 0 1 1 0 0 1 2 0 12.018 12.018 0 1 0 5.37927-10h.62073a1 1 0 0 1 0 2h-3a.99943.99943 0 0 1 -1-1v-3a1 1 0 0 1 2 0v.51392a13.99667 13.99667 0 0 1 22 11.48608zm-5 0a9 9 0 1 1 -9-9 9.00984 9.00984 0 0 1 9 9zm-5.44531 1.168-2.55469-1.70316v-4.46484a1 1 0 0 0 -2 0v5a1.00028 1.00028 0 0 0 .44531.832l3 2a1 1 0 0 0 1.10938-1.664z" />
            </g>
        </svg>
    );
};
