import Element from 'element-ui';

export const requestInterceptors = [
    {
        name: 'addHttpRequestHeader',
        success(config) {
            config.headers['X-Requested-With'] = 'XMLHttpRequest';
            return config;
        },
        fail(err) {
            console.error('request error: ', err);
            return Promise.reject(err);
        }
    }
];

export const responseInterceptors = [
    {
        name: 'formatResponse',
        success(response) {
            const data = Object.assign({}, response.data, {
                __response: response
            });
            return data;
        }
    },
    {
        name: 'handleError',
        success(response) {
            // if (response.code !== 200 && response.code !== 1001 && response.code !== 1002 && response.code !== 1003) {
              if (response.code !== 200 && response.code < 1000) {
                Element.Notification({
                    title: '请求异常',
                    message: response.message ? response.message : response.code,
                    customClass: 'notify',
                    duration: 5000,
                    type: 'error'
                });
                console.info(response);
                return Promise.reject(response);
            }
            return response;
        },
        fail(err) {
            Element.Notification({
                title: '网络请求失败',
                message: '你的网络可能遇到点问题，请稍后再试。',
                customClass: 'notify',
                duration: 5000,
                type: 'error'
            });
            console.error('response error: ', err);
            return Promise.reject(err);
        }
    }
];

const interceptors = {
    response: responseInterceptors,
    request: requestInterceptors
};

function doInstall(instance, options = {}) {
    const {type, ignoreIntercepors = []} = options;
    interceptors[type]
        .filter(interceptor => !~ignoreIntercepors.indexOf(interceptor.name))
        .forEach((interceptor) => {
            const {success, fail} = interceptor;
            instance.interceptors[type].use(success, fail);
        });
}

export function install(instance, option = {}) {
    const {
        ignoreIntercepors = []
    } = option;

    doInstall(instance, {
        type: 'request',
        ignoreIntercepors
    });

    doInstall(instance, {
        type: 'response',
        ignoreIntercepors
    });
}
