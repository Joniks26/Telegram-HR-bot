const webAppUrl = 'https://www.google.ru/webhp?tab=rw'

module.exports = {
     choseRole: {
        reply_markup: JSON.stringify({
            inline_keyboard: [
                [{text: 'Я наниматель', callback_data: 'Я наниматель'}, {text: 'Я кандидат', callback_data: 'Я кандидат'}]
            ]
        }),
    },

     employerRole: {
        reply_markup: JSON.stringify({
            inline_keyboard: [
                [{text: 'Backend Developer', callback_data: 'Ищу Backend Developer'}, {text: 'Frontend Developer', callback_data: 'Ищу Frontend Developer'}],
                [{text: 'Fullstack Developer', callback_data: 'Ищу Fullstack Developer'}, {text: 'QA Engineer', callback_data: 'Ищу QA Engineer'}],
                [{text: 'Android Developer', callback_data: 'Ищу Android Developer'}, {text: 'iOS Developer', callback_data: 'Ищу iOS Developer'}],
                [{text: 'Data Scientist', callback_data: 'Ищу Data Scientist'}, {text: 'Data Analyst', callback_data: 'Ищу Data Analyst'}],
                [{text: 'DevOps Engineer', callback_data: 'Ищу DevOps Engineer'}, {text: 'UI/UX Designer', callback_data: 'Ищу UI/UX Designer'}],
                [{text: 'Recruiter/HR-manager', callback_data: 'Ищу Recruiter/HR-manager'}, {text: 'Project Manager', callback_data: 'Ищу Project Manager'}],

            ]
        })
    },

    hiredRole: {
        reply_markup: JSON.stringify({
            inline_keyboard: [
                [{text: 'Backend Developer', callback_data: 'Я Backend Developer'}, {text: 'Frontend Developer', callback_data: 'Я Frontend Developer'}],
                [{text: 'Fullstack Developer', callback_data: 'Я Fullstack Developer'}, {text: 'QA Engineer', callback_data: 'Я QA Engineer'}],
                [{text: 'Android Developer', callback_data: 'Я Android Developer'}, {text: 'iOS Developer', callback_data: 'Я iOS Developer'}],
                [{text: 'Data Scientist', callback_data: 'Я Data Scientist'}, {text: 'Data Analyst', callback_data: 'Я Data Analyst'}],
                [{text: 'DevOps Engineer', callback_data: 'Я DevOps Engineer'}, {text: 'UI/UX Designer', callback_data: 'Я UI/UX Designer'}],
                [{text: 'Recruiter/HR-manager', callback_data: 'Я Recruiter/HR-manager'}, {text: 'Project Manager', callback_data: 'Я Project Manager'}],

            ]
        })
    },

}



// {
//     inline_keyboard:[
//         [{text: 'Заполнить форму', web_app:{url: webAppUrl}}]
//     ]
// }