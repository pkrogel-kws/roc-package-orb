export default {
    settings: {
        build: {
            input: { web: undefined, node: undefined },

            redux: {
                useDefaultReducers: true,
                middlewares: 'src/redux/middlewares.js',
                enhancers: 'src/redux/enhancers.js',
                useDefaultMiddlewares: true,
                sagas: 'src/redux/sagas.js',
            },

            // Will be moved to redux above eventually, now kept here to make the template upgradable
            reducers: 'src/redux/reducers.js',

            i18n: {
                usePolyfill: false,
                locales: [],
            },

            routes: 'src/routes/routes.js',
            useDefaultRoutes: true,

            clientLoading: undefined,
            // Consider using the init function to merge this with the previous
            resources: ['roc-package-orb/styles/base.css'],

            templateValues: 'src/template-values.js',
        },
        dev: {
            // A11Y not play nice with Redux Devtools at the moment
            a11y: false,

            redux: {
                devTools: {
                    enabled: true,
                    dockMonitor: {
                        __raw: {},
                        defaultPosition: 'right',
                        defaultSize: 0.3,
                        toggleVisibilityKey: 'ctrl-h',
                        changePositionKey: 'ctrl-q',
                        defaultIsVisible: false,
                    },
                    instrument: {
                        __raw: {},
                        maxAge: undefined,
                    },
                    logMonitor: {
                        __raw: {},
                        theme: 'ocean',
                    },
                },
                logger: {
                    __raw: {},
                    level: 'info',
                    collapsed: true,
                    duration: true,
                    timestamp: true,
                },
            },

            yellowbox: {
                enabled: true,
                ignore: ['[HMR]', 'Warning: React attempted to reuse markup in a container'],
            },
        },
    },
};
