function createResult(error, data) {
    if (data)
        return createSuccessResult(data)
    else
        return createErrorResult(error)
}

function createSuccessResult(data) {
    return { status: "success", data: data }
}

function createErrorResult(error) {
    return { status: "error", error: error }
}

module.exports = { createResult, createErrorResult, createSuccessResult }