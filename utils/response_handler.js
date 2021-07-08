
send = (res, statusCode, content) => {

    if (statusCode === 200) {
        res.status(statusCode).json({
            data: content
        })
    } else {

        console.log(content)

        res.status(statusCode).json({
            error: content
        })
    }
}

module.exports = {
    send
}