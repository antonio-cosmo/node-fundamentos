class AppError{
    public readonly status;
    public readonly message;

    constructor(message: string, status = 500){
        this.message = message;
        this.status = status
    }
}

export { AppError }