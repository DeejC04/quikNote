import useSWR from 'swr'
import React from 'react'

const fetcher = url => fetch(url).then(r => r.json())

function getCurrentProvider(param) {
    switch (param) {
        case 'google':
            return("Google")
    }
}

const ProviderIcon = () => {
    const { data, error, isLoading } = useSWR('/api/userinfo', fetcher)
    if (error) return <div>An error occured.</div>
    if (!data) return <div>Loading ...</div>

    return (
        <div>
            {getCurrentProvider(data.user.provider)}
        </div>
    )
}

export default ProviderIcon

