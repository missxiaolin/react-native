import AsyncStorage from '@react-native-async-storage/async-storage';
import Storage from 'react-native-storage';

export const storage = new Storage({
    // 最大容量，默认值1000条数据循环存储
    size: 1000,

    // 存储引擎：对于RN使用AsyncStorage，对于web使用window.localStorage
    // 如果不指定则数据只会保存在内存中，重启后即丢失
    storageBackend: AsyncStorage,

    // 数据过期时间，默认一整天（1000 * 3600 * 24 毫秒），设为null则永不过期
    defaultExpires: 1000 * 3600 * 24,

    // 读写时在内存中缓存数据。默认启用。
    enableCache: true,

    // 如果storage中没有相应数据，或数据已过期，则会调用相应的sync方法，无缝返回最新数据。
    // sync方法的具体说明会在后文提到，可以在构造函数这里就写好sync的方法，或是写到另一个文件里，这里require引入。
    // 或是在任何时候，直接对storage.sync进行赋值修改
    sync: {},
});

/**
 * 增加
 * @param newKey
 * @param newId
 * @param newValue
 * @param time
 */
export const addStorage = (newKey: string, newId: any = null, newValue: any, time = null) => {
    // 使用key保存数据
    // console.log(newKey, newValue);
    storage.save({
        key: newKey,
        id: newId,
        data: newValue,

        // 设为null,则不过期,这里会覆盖初始化的时效
        expires: time,
    });
};

/**
 * 查询
 * @param oldKey
 * @param oldId
 * @returns
 */
export const getStorage = async (oldKey: string, oldId: any = null) => {
    let value = null;
    try {
        value = await storage.load({
            key: oldKey,
            id: oldId,
        });
    } catch (error) {
        console.log('key-id查询失败', error);
    }
    return value;
};

/**
 * 查询key下所有数据
 * @param oldKey
 * @returns
 */
export const getKeyStorage = async (oldKey: string) => {
    let value = null;
    try {
        value = await storage.getAllDataForKey(oldKey);
    } catch (error) {
        console.log('key查询失败', error);
    }
    return value;
};

/**
 * 删除单个key-id数据
 * @param oldKey
 * @param oldId
 */
export const delStorage = (oldKey: string, oldId: any = null) => {
    storage
        .remove({
            key: oldKey,
            id: oldId,
        })
        .then(res => {
            console.log('清除单个key-id', res);
        })
        .catch(error => {
            console.log('清除单个key-id失败', error);
        });
};

/**
 * 删除key下所有数据
 * @param oldKey
 */
export const delKeyStorage = (oldKey: string) => {
    // console.log('清除', oldKey);
    storage
        .clearMapForKey(oldKey)
        .then(res => {
            console.log('清除key-storage', res);
        })
        .catch(error => {
            console.log('清除key-storage失败', error);
        });
};

/**
 * 清空
 */
export const clearStorage = () => {
    storage
        .clearMap()
        .then(res => {
            console.log('清除storage', res);
        })
        .catch(error => {
            console.log('清除storage失败', error);
        });
};
