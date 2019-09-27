function verificar() {
    ('#identicalForm').bootstrapValidator({
           feedbackIcons: {
                valid: 'glyphicon glyphicon-ok',
                invalid: 'glyphicon glyphicon-remove',
                validating: 'glyphicon glyphicon-refresh'
            },
            fields: {
                password: {
                    validators: {
                        identical: {
                            field: 'confirmPassword',
                            message: ''
                        }
                    }
                },
                confirmPassword: {
                    validators: {
                        identical: {
                            field: 'password',
                            message: 'La contraseña no coincide'
                        }
                    }
                }
            }
        });
};