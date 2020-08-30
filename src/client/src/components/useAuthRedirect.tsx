import {useEffect} from 'react';
import {UserStore} from "../stores/UserStore";


export function useAuthRedirect(history: any, loggedIn: boolean, route: string, UserStore?: UserStore) {
    useEffect(() => {
        const isAuthenticated = async () => {
            await UserStore?.login()
            return UserStore?.user !== undefined
        }

        isAuthenticated().then((authenticated) => {
            if (authenticated === loggedIn) history.push(route)
        })
    }, [history, UserStore])
}
