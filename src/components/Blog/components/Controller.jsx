import { v4 as uuidv4, v4 } from 'uuid';
import { toTitleCase } from '../utils'
import firebase, { db, storage } from '../../../firebaseApp';

export const CreateAuthor = async (first_name, last_name, created_at, imgPath) => {

    //handle existing entry 
    const existingRef = await (db.collection('authors').where('first_name', "==", first_name).where('last_name', "==", last_name)).get();

    if (!existingRef.empty) {
        new Error('Author already exists')
        console.error('Author already exists')
        console.log(existingRef.id)
        return existingRef.id
    };


    const uuid = uuidv4()
    // const id = uuid
    // const newDoc = db.collection('authors').doc()
    // const newDocId = newDoc.id

    db.collection('authors').add({
        first_name: first_name,
        last_name: last_name,
        created_At: created_at,
        imgPath: imgPath,
        uuid: uuid
    })
        .then(async (docRef) => {
            // docId = docRef.id
            console.log(`New Author created with ID: ${docRef.id}`)

        })
        .catch((error) => console.log("Error adding document", error))




};

export const CreateBlogPost = async (html, author, authorid, authorImg, blogCategory, description, blogDate, title, titleLower, seoTitle, imgCaption, imgPath, blogTags, titleSearchIndex, descSearchIndex) => {

    const getFullMonthDate = (string) => {

        const FullMonthArr = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

        const splitDate = string.split("/")

        let month = splitDate[0] - 1
        const day = (splitDate[1].length < 2) ? `0${splitDate[1]}` : splitDate[1]
        const year = splitDate[2]

        month = FullMonthArr[month]

        return `${month} ${day}, ${year}`

    }

    const getFullMonthDateTimeStamp = (string) => {

        const splittedDateTime = string.toString().split(" ")

        return `${splittedDateTime[1]} ${splittedDateTime[2]}, ${splittedDateTime[3]}`
    }

    //handle existing entry 
    const existingRef = (await db.collection('posts').where('title', "==", title).get());

    console.log(existingRef.empty)
    if (!existingRef) {
        new Error('Blog Post already exists')
        console.error('Blog Post already exists')
        return
    };

    // const newDoc = db.collection('posts').doc();
    // const newDocId = newDoc.id
    const uuid = uuidv4()

    db.collection('posts').add({
        HTMLtext: html,
        author: author,
        authorid: authorid,
        authorImg: authorImg,
        blogCategory: blogCategory,
        blogCategoryURL: blogCategory.toLowerCase().split(" ").join("-"),
        description: description,
        title: title,
        created_At: new Date(),
        date: blogDate,
        formattedDate: getFullMonthDate(blogDate),
        imgPath: imgPath,
        imgCaption: imgCaption,
        titleLower: titleLower,
        titleLink: title.toLowerCase().split(" ").join("-"),
        seoTitle: seoTitle,
        blogTags: blogTags,
        titleSearchIndex: titleSearchIndex,
        descSearchIndex: descSearchIndex,
        uuid: uuid
    })

        .then((docRef) => {

            // docId = docRef.id
            console.log(`New Blog Post created with ID: ${docRef.id}`)

        })
        .catch((error) => console.log("Error adding BlogPost", error))

    // await Promise.all([query, query.id])



}

export const UploadImage = async (image, imageName) => {

    if (!image, !imageName) return

    var storageRef = storage.ref('/blog-main-photos/' + imageName);
    storageRef.put(image)

    return storageRef.getDownloadURL()
    //set the image Url state in the form modifying page 

}

export const UploadAuthorImage = async (image, imageName) => {
    if (!image, !imageName) return

    var storageRef = storage.ref('/authors/' + imageName);
    storageRef.put(image)

    return storageRef.getDownloadURL()
}

export const UpdateBlogPost = async (id, author_id, html, title, imgPath) => {
    const existingRef = db.collection('posts').get(id);

    //    console.log(existingRef.id)
    //    if(!existingRef.id){
    //         new Error('Author already exists')
    //         console.error('Author already exists')
    //         return
    //     };

    existingRef.update({
        HTMLtext: html,
        title: title,
        author_id: author_id,
        imgPath: imgPath,
        updated_At: firebase.firestore.FieldValue.serverTimestamp()

    })
        .then((docRef) => console.log('updated: ', docRef))
        .catch((error) => console.log(error))
}

export const ReadAuthor = async (id) => {
    const authorRef = db.collection('authors').doc(id).get()

    return authorRef
}

export const ReadAuthorFirstLast = async (first_name, last_name) => {
    const authorRef = (await db.collection('authors').where('first_name', "==", first_name).where('last_name', "==", last_name).get()).empty;

    return authorRef
}


export const ReadBlogPost = async (id) => {
    const BlogPostRef = db.collection('posts').doc(id).get()

    return BlogPostRef
}

export const UpdateAuthorWithBlogPost = async (author_id, blog_id) => {

    let results = []
    const getBlogData = db.collection('author').doc(author_id)
        .get()
        .then((doc) => {
            console.log(doc.data())


        }).catch((error) => console.log('error:', error))
    console.log(getBlogData)
    console.log(results)
    const q1 = db.collection('authors').doc(author_id).update({
        blogs: firebase.firestore.FieldValue.arrayUnion([blog_id]),
    })
        .then((docRef) => console.log("Authors updated with the appropriate refs: ", docRef))
        .catch((error) => console.log("some error occured", error))

    const q2 = db.collection('authors').doc(author_id).update({
        updated_At: firebase.firestore.FieldValue.serverTimestamp()
    })
        .then((docRef) => console.log("Authors updated with the appropriate refs: ", docRef))
        .catch((error) => console.log("some error occured", error))
    await getBlogData
    await q1
    await q2
}

export const UpdateBlogWithAuthor = async (blog_id, author_id) => {

    const q1 = db.collection('posts').doc(blog_id).update({
        author_id: author_id,
    })

    const q2 = db.collection('posts').doc(blog_id).update({
        updated_At: firebase.firestore.FieldValue.serverTimestamp()
    })
        .then((docRef) => console.log("Blog with authors"))
        .catch((error) => console.log("some error occured", error))

    await Promise.all([q1, q2])
}

const CreateIndex = (words) => {

    words = words.trim().split(" ")
    let listIndex = []
    for (let i = 0; i < words.length; i++) {
        for (let y = 1; y < words[i].length; y++) {
            listIndex.push(words[i].substr(0, y + 1).toLowerCase())
        }
    }

    console.log(listIndex)
}

export const MainSearch = async (query, stateChange) => {
    let results = []
    db
        .collection('posts')
        .where("title", ">=", query)
        .where("title", "<", `${query}+z`)
        .onSnapshot((querySnapshot) => {

            querySnapshot.forEach((doc) => results.push(doc));
            console.log(results)
        })
    stateChange(results)
    return results

}

export const QueryForTag = async (query) => {

    let results = []

    db.collection('posts')
        .where("blogTags", "array-contains", query)
        .onSnapshot((querySnapshot) => {
            querySnapshot.forEach((doc) => results.push(doc));
            // console.log(results)
        })

    return results
}

export const QueryForCategory = async (query) => {

    let results = []

    db.collection('posts')
        .where("blogCategoryURL", "==", query)
        .onSnapshot((querySnapshot) => {
            querySnapshot.forEach((doc) => results.push(doc));
            // console.log(results)
        })

    return results
}

export const QueryForCategoryAndTag = async (query, category) => {

    let results = []

    db.collection('posts')
        .where("blogCategoryURL", "==", category)
        .where("blogTags", "array-contains", "financialliteracy")
        .onSnapshot((querySnapshot) => {
            querySnapshot.forEach((doc) => results.push(doc.data()));
            console.log(results)
        })

    return results
}

export const GetAllPosts = async () => {

    let results = []

    db.collection('posts')
        .onSnapshot((querySnapshot) => {
            querySnapshot.forEach((doc) => results.push(doc));
            console.log(results)
        })

    return await results
};

export const GetFirstFivePosts = async () => {

    let results = []

    db.collection('posts')
        .limit(5)
        .onSnapshot((querySnapshot) => {
            querySnapshot.forEach((doc) => results.push(doc));
            console.log(results)
        })

    return results
}
