const sessioIDToUserMap = new Map();

export function setUser(id,user){
    sessioIDToUserMap.set(id,user);
};

export function getUser(id){
    return sessioIDToUserMap.get(id);
}


