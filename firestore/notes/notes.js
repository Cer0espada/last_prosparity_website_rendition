////////////Database Notes 


/////---and,or,not----////
//and operator similiar to SQL 
const query = db.collection('items')
                .where('tags.cool', "==", true)
                .where('tags.awesome', "==", true)
                .where('tags.cool', "==", true)
                .where('tags.cool', "==", true)
                //you can only use one range operator per query 

//or operator similiar to SQL 
const q1 = db.collection('items').where('tags.cool')

//Not , must save untagged
const not =db.collection('items').where('tag.cool', '==', false)

//Not with range value
const ql = db.collection('items').where('price', '<', 20)
const ql = db.collection('items').where('price', '>', 20)



////-----trees----///

const topLevel =db.collection('comments').where('parent', '==', false)

const traverseBreadth = (level) => db.collection('comments')

const transverBreath2 = (id) => {
    return db.collection('comments')
    .where('parent', '>=', 'id')
    .where('parent', '<=', `${id}~`)
}


////////------Query of Arrays ---------//////

const readIds = async(collection, ids) => {
    const reads = ids.map(id => collection.doc(id).get());
    const result = await Promise.all(reads);
    return result.map(v => v.data())
}

readIds(db.collection('products') ,['foo', 'bar', 'baz'])

///////------duplication------////

export const getFeed = async() => {
    const followedUsers = await db.collection('followers').where('users', 'array-contains', 'somehting')
                        .orderby('lastPost', 'desc')
                        .limit(10)
                        .get()
    
    const data = followedUsers.docs.map(doc => doc.data());

    const posts = data.reduce((acc, cur) => acc.concat(cur.recentPosts), []);


}