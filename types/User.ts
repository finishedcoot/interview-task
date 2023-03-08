export interface SingleUserInterface {
    id:number,
    email:string,
    username:string,
    password:string,
    name:{
        firstname:string,
        lastname:string
    },
    address:{
        city:string,
        street:string,
        number:number,
        zipcode:string,
        geolocation:{
            lat:string,
            long:string
        }
    },
    phone:string
}

export type UsersType = SingleUserInterface[]

export type UserState = UsersType | null
