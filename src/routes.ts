import { request, response, Router } from "express";

const router = Router()

router.post('/bills', (request, response)=>{
    return response.status(201).send();
});

export {router}
