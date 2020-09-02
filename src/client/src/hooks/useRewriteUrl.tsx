import {useEffect} from 'react';


export function useRewriteUrl(history: any, url: string) {
    useEffect(() => {
        history.push(url)
    }, [history])
}
