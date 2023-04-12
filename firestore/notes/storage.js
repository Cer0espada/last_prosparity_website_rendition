import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
import sharp from 'sharp';
import {Storage} from '@google-cloud/storage';
import * as fs from 'fs-extra'
import {tmpdir} from 'os';
import {join} from 'path';

const gcs = Storage();

export const resizeAvatar = functions.storage.object().onFinalize(async object => {
    const bucket = gcs.bucket(object.bucket)

    const filePath = object.name;
    const fileName = filePath.split('/').pop();

    const tmpFilePath = join(tmpdir(), object.name);

    const avatarFileName = "avatar_" + fileName;

    const tmpAvatarPath = join(tmpdir(), avatarFileName);

    if(fileName.includes('avatar_')){
        console.log('existing function')
        return false
    }

    await bucket.file(filePath).download({
        destination: tmpFilePath
    });

    await sharp(tmpFilePath).resize(100, 100).toFile();

    return bucket.upload(tmpAvatarPath, {
        destination: join(dirname(filePath), avatarFileName)
    })

})





