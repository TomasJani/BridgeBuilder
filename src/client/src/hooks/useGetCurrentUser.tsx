import {useEffect} from 'react';
import {UserStore} from "../stores/UserStore";


export function useGetCurrentUser(userStore?: UserStore) {
    useEffect(() => {
        const login = async () => {
            await userStore?.login()
        }
        login().then()
    }, [userStore])
}
