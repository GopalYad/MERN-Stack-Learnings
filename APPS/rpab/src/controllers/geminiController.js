import { run } from "../../geminiApi.js";
const gemini =async (req,res) =>{
  try{
    const{prompt}=req.body;
    const response = await run(prompt)
    res.status(201).json({response})
  }catch(error){
    console.log(error)
    res.status(500).json({ error: "Something went wrong!" });
  }
}

export default gemini