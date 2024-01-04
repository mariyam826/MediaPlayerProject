import React,{useState,useEffect} from 'react'
import { Button, Form, Modal } from 'react-bootstrap'
import { uploadNewVideoAPI } from '../services/allAPI';


function Add({setUploadVideoResponse}) {
  const [uploadVideo,setUploadVideo] = useState({
    id:"",caption:"",url:"",link:""
  })
  console.log(uploadVideo);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  //upload by copy link and store by embed link
  const getYoutubeEmbedLink = (e)=>{
    const {value} = e.target
    if(value.includes("v=")){
      let vID = value.split("v=")[1].slice(0,11)
      console.log(`https://www.youtube.com/embed/${vID}`);
      setUploadVideo({...uploadVideo,link:`https://www.youtube.com/embed/${vID}`})
    }else{
      setUploadVideo({...uploadVideo,link:""})
    }
  }

  
//communication bw different port numberw -  asynchronous call
  const handleUpload = async()=>{
    const {id,caption,url,link} = uploadVideo
    if(!id || !caption || !url || !link){
      alert("Uploading form is incomplete. Please fill the form completely!!!")
    }else{
      //store uploadVideo in json server
      const result = await uploadNewVideoAPI(uploadVideo)
      
      if(result.status>=200  && result.status<300){
        handleClose()
        //reset
        setUploadVideo({
          id:"",caption:"",url:"",link:""
        })
        //share result data to view component
        setUploadVideoResponse(result.data)
      }else{
        alert(result.message)
      }
    }
  }
  return (
    <>
    <div className="d-flex align-items-center">
      <h5>Upload New Video</h5>
      <button onClick={handleShow} className='btn' ><i style={{height:'40px'}} class="fa-solid fa-photo-film fa-2x"></i></button>
    </div>
    <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Upload A Video</Modal.Title>
        </Modal.Header>
        <p>Please Fill the following details!!!</p>
        
        <Modal.Body className='border border-secondary rounded m-2'>
         <Form>
           <input onChange={e=>setUploadVideo({...uploadVideo,id:e.target.value})} placeholder='Enter Video ID' type="text" className='form-control ' />
           <input onChange={e=>setUploadVideo({...uploadVideo,caption:e.target.value})}  placeholder='Enter Video Caption' type="text" className='form-control mt-3'/>
           <input onChange={e=>setUploadVideo({...uploadVideo,url:e.target.value})} placeholder='Enter Video Image URL' type="text" className='form-control mt-3' />
           <input onChange={getYoutubeEmbedLink} placeholder='Enter Youtube Video Link' type="text" className='form-control mt-3' />
         </Form>
        </Modal.Body>
        <Modal.Footer className='mt-2' >
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button onClick={handleUpload} className='btn btn-warning'>Upload</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Add