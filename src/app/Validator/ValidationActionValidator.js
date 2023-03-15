const ValidationActionValidator = {
    validatePostValidationAction(data) {
        let errors = {};
        let formIsValid = true;

        if (!data.nameAction) {
            formIsValid = false;
            errors["nameAction"] = "Please enter the name action"
        }

        if (!data.action) {
            formIsValid = false;
            errors["action"] = "Please enter the action"
        }

        if (!data.manyTimes) {
            formIsValid = false;
            errors["manyTimes"] = "Please enter the many times"
        }

        if (data.channel.length < 1) {
            formIsValid = false;
            errors["channel"] = "Please channel is required"
        }

        data.channel?.map((channel) => {
            switch (channel.channel) {
                case 'sms':
                    if (!channel.message) {
                        formIsValid = false;
                        errors["messageSms"] = "Please enter the message"
                    }
                    break;
                case 'email':
                    if (!channel.title) {
                        formIsValid = false;
                        errors["titleEmail"] = "Please enter the subject"
                    }

                    if (!channel.message) {
                        formIsValid = false;
                        errors["messageEmail"] = "Please enter the message"
                    }
                    break;
                default:
                    if (!channel.title) {
                        formIsValid = false;
                        errors["titleApp"] = "Please enter the title"
                    }

                    if (!channel.message) {
                        formIsValid = false;
                        errors["messageApp"] = "Please enter the message"
                    }
            }

        })

        return {
            errors,
            formIsValid,
        };
    },

    validateUpdateValidationAction(data) {
        let errors = {};
        let formIsValid = true;

        if (!data.manyTimes) {
            formIsValid = false;
            errors["manyTimes"] = "Please enter the many times"
        }


        if (data.channel.length < 1) {
            formIsValid = false;
            errors["channel"] = "Please channel is required"
        }

        data.channel?.map((channel) => {
            switch (channel.channel) {
                case 'sms':
                    if (!channel.message) {
                        formIsValid = false;
                        errors["messageSms"] = "Please enter the message"
                    }
                    break;
                case 'email':
                    if (!channel.title) {
                        formIsValid = false;
                        errors["titleEmail"] = "Please enter the subject"
                    }

                    if (!channel.message) {
                        formIsValid = false;
                        errors["messageEmail"] = "Please enter the message"
                    }
                    break;
                default:
                    if (!channel.title) {
                        formIsValid = false;
                        errors["titleApp"] = "Please enter the title"
                    }

                    if (!channel.message) {
                        formIsValid = false;
                        errors["messageApp"] = "Please enter the message"
                    }
            }

        })

        return {
            errors,
            formIsValid,
        };
    }
}


export default ValidationActionValidator;