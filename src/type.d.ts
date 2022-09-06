interface iUser {
    id: number,
    handle: string
}

interface iPeep {
    id: number,
    body: string,
    created_at: string,
    updated_at: string,
    user: iUser,
    likes: iUser[]
}
