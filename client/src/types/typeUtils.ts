export interface User {
    email : string,
    id : string,
    username? : string
}

export enum CurrentComponent {
    Home = 'Home',
    Notification ='Notification',
    Profile = 'Profile',
    Group = 'Group',
    Search = 'Search'
}
