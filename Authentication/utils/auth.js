const sessioIDToUserMap = new Map();   // creates a new map to store userId(key) and users information(value) 


export function setUser(id,user){
    sessioIDToUserMap.set(id,user);
};

export function getUser(id){
    return sessioIDToUserMap.get(id);
}