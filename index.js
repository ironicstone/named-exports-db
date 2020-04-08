module.exports = {
  react: [
    'Children',
    'createRef',
    'Component',
    'PureComponent',
    'createContext',
    'forwardRef',
    'lazy',
    'memo',
    'useCallback',
    'useContext',
    'useEffect',
    'useImperativeHandle',
    'useDebugValue',
    'useLayoutEffect',
    'useMemo',
    'useReducer',
    'useRef',
    'useState',
    'Fragment',
    'Profiler',
    'StrictMode',
    'Suspense',
    'unstable_SuspenseList',
    'createElement',
    'cloneElement',
    'createFactory',
    'isValidElement',
    'version',
    'unstable_withSuspenseConfig',
    '__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED',
  ],
  scheduler: [
    'unstable_now',
    'unstable_ImmediatePriority',
    'unstable_UserBlockingPriority',
    'unstable_NormalPriority',
    'unstable_IdlePriority',
    'unstable_LowPriority',
    'unstable_runWithPriority',
    'unstable_next',
    'unstable_scheduleCallback',
    'unstable_cancelCallback',
    'unstable_wrapCallback',
    'unstable_getCurrentPriorityLevel',
    'unstable_shouldYield',
    'unstable_continueExecution',
    'unstable_pauseExecution',
    'unstable_getFirstCallbackNode',
  ],
  'react-is': [
    'typeOf',
    'AsyncMode',
    'ConcurrentMode',
    'ContextConsumer',
    'ContextProvider',
    'Element',
    'ForwardRef',
    'Fragment',
    'Lazy',
    'Memo',
    'Portal',
    'Profiler',
    'StrictMode',
    'Suspense',
    'isValidElementType',
    'isAsyncMode',
    'isConcurrentMode',
    'isContextConsumer',
    'isContextProvider',
    'isElement',
    'isForwardRef',
    'isFragment',
    'isLazy',
    'isMemo',
    'isPortal',
    'isProfiler',
    'isStrictMode',
    'isSuspense',
  ],
  '@ali/recore-miniapp': [
    /* common */
    'version',
    /* core */
    'ViewController',
    'compose',
    'destroy',
    'inject',
    'runApp',
    'autorun',
    /* obx */
    'obx',
    'obxProperty',
    'xId',
    'xModifiers',
    'nextTick',
    '$get',
    '$set',
    '$del',
    '$extend',
  ],
  swr: ['trigger', 'mutate', 'SWRConfig', 'default', 'useSWRPages'],
  'prop-types': [
    'array',
    'bool',
    'func',
    'number',
    'object',
    'string',
    'symbol',
    'any',
    'arrayOf',
    'element',
    'elementType',
    'instanceOf',
    'node',
    'objectOf',
    'oneOf',
    'oneOfType',
    'shape',
    'exact',
    'checkPropTypes',
    'resetWarningCache',
    'PropTypes',
  ],
  eventemitter3: ['EventEmitter'],
  /** formily related begine */
  '@formily/react': [
    'FormEffectHooks',
    'createEffectHook',
    'createFormActions',
    'createAsyncFormActions',
    'createEffectsProvider',
    'createQueryEffects',
    'setValidationLanguage',
    'setValidationLocale',
    'registerValidationFormats',
    'registerValidationRules',
    'registerValidationMTEngine',
    'FormPath',
    'BigData',
    'Form',
    'Field',
    'FieldList',
    'VirtualField',
    'FormSpy',
    'FormProvider',
    'FormConsumer',
    'useFormSpy',
    'useFieldState',
    'useFormState',
    'useForm',
    'default',
    'useField',
    'useVirtualField',
    'useFormEffects',
    'useFormQuery',
    'FormGraph',
    'FormLifeCycle',
    'FormHeart',
    'setLocale',
    'setLanguage',
    'getMessage',
    'FormValidator',
    'LifeCycleTypes',
    'isField',
    'isFieldState',
    'isFormState',
    'isVirtualField',
    'isVirtualFieldState',
    'isStateModel',
    'createForm',
  ],
  '@formily/core': [
    'FormPath',
    'BigData',
    'setValidationLanguage',
    'setValidationLocale',
    'FormGraph',
    'FormLifeCycle',
    'FormHeart',
    'setLocale',
    'setLanguage',
    'getMessage',
    'FormValidator',
    'LifeCycleTypes',
    'isField',
    'isFieldState',
    'isFormState',
    'isVirtualField',
    'isVirtualFieldState',
    'isStateModel',
    'createForm',
    'registerValidationFormats',
    'registerValidationRules',
    'registerValidationMTEngine',
    'default',
  ],
  '@formily/shared': [
    'toArr',
    'each',
    'map',
    'reduce',
    'every',
    'some',
    'findIndex',
    'find',
    'includes',
    'isEqual',
    'isFn',
    'isArr',
    'isPlainObj',
    'isStr',
    'isBool',
    'isNum',
    'isObj',
    'isRegExp',
    'shallowClone',
    'clone',
    'isValid',
    'isEmpty',
    'camelCase',
    'lowercase',
    'uppercase',
    'stringLength',
    'globalThisPolyfill',
    'FormPath',
    'deprecate',
    'Subscribable',
    'merge',
    'instOf',
    'scheduler',
    'defaults',
    'log',
    'BigData',
    'uid',
  ],
  'react-eva': [
    'connect',
    'createActions',
    'createAsyncActions',
    'mergeActions',
    'createEffects',
    'useEva',
  ],
  '@formily/validator': [
    'setValidationLocale',
    'setLocale',
    'setValidationLanguage',
    'setLanguage',
    'getMessage',
    'FormValidator',
  ],
  immer: [
    'Immer',
    'applyPatches',
    'createDraft',
    'default',
    'finishDraft',
    'immerable',
    'isDraft',
    'isDraftable',
    'nothing',
    'original',
    'produce',
    'produceWithPatches',
    'setAutoFreeze',
    'setUseProxies',
  ],
  /** formily related end */
};
