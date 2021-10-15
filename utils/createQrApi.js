
export const creatQr = (url) => {
    return (
        `https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${url}`
    )
};