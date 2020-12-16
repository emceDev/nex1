import React, { useEffect, useState } from "react";
import Input from '../components/Input'
import {PostPreview} from '../components/PostPreview'
import { vh, vw } from "../state/atom";
import { useRecoilState } from "recoil";
async function callapi(data) {
// const data1 = {title:'title',description:'descritpooni',img:'utf xDDDD'}

	const request = await fetch("api/upload",{method:'POST',body:JSON.stringify(data)})
request
}

const Upload = () => {
	const [title, setTitle] = useState('')
	const [description, setDescription] = useState('')
	const [img, setImg] = useState(null)
	const [imgPreview, setImgPreview] = useState(null)
	const [w, setw] = useRecoilState(vw);
	const [h, seth] = useRecoilState(vh);
	
function cb(x) {
		let img = x.current.files[0]
		let reader = new FileReader()
		reader.readAsDataURL(img)
		reader.onloadend = ()=>{

		console.log(img)
		setImgPreview(reader.result)
			setImg(reader.result)
		}
		reader.onerror = ()=>{
			console.log('an error occured')
		}
}

function submit() {
	const data ={title,description,img}
	if(title&&description===''){
		console.log("title or desc")
	}else if(img===null){
		console.log('no imgage' +img)
	}else{
		callapi(data)
	}
}

	return <div>
		<Input cb={cb}/>
		<input type='text' id='title' placeholder="title" onChange={(e)=>{setTitle(e.target.value)}}></input>
		<input type='text' id='description' placeholder="description" onChange={(e)=>{setDescription(e.target.value )}}></input>
		{/* <input type="button" onClick={()=>{submit()}}/> */}
		<input type="button" onClick={()=>{submit}} placeholder="zapisz"/>
		<div>
			<PostPreview x={{title:title,description:description,src:imgPreview}} w={w} h={h}/>
		</div>
		</div>;
};
export default Upload;
