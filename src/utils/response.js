export const ok = (res, data)=>{
    res.status(200).send(data);
}

export const created = (res, data)=>{
    res.status(201).send(data);
}

export const badRequest = (res,messgae)=>{
    res.status(400).send(messgae);
}

export const forbidden = (res, message)=>{
    res.status(403).send(message)
}
export const serverError = (res, message)=>{
    res.status(500).send(message);
} 