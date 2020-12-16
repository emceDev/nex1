import cloudinary from "../../../config/cloudinary";
import {app} from '../../../config/firebase'
import { NextApiRequest, NextApiResponse } from "next";


// post obrazek==>get url=>post to firebase desc title... url 
export default function (req: NextApiRequest, res: NextApiResponse) {
	// fetch('https://jsonplaceholder.typicode.com/todos/1')
	// .then(response => response.json())
	// .then(json => res.json(json))
	const img = 'https://res.cloudinary.com/demo/w_300,h_200,c_crop/sample.jpg'
	const reqParsed = JSON.parse(req.body)
	const image=reqParsed.image
	const title=reqParsed.title
	const description=reqParsed.description
	const url = 'xd'
	console.log('req')
	console.log(reqParsed.title)
	
	// cloudinary.uploader.unsigned_upload(img, 'School',{},  (error,result)=>{!error?post(result.url):console.log(error)})
	post()
	async function post() {
		if (url!==undefined) {
		let key = await app.database().ref('School/').push()
		app.database().ref('School/').push()
			app.database().ref('School/'+key.key+'/').set({
				title:title,
				description:description,
				url:img
			});
			res.json("done")
		}else{
			console.log(url)
		}
	}
	


	
}

