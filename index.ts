import {CallbackQuery, Message} from "node-telegram-bot-api";


const TelegramBot = require('node-telegram-bot-api');
const token = '5654258820:AAGP-Jxi4YUgbww1S6lpjs1LBRGyg3LdZ7w'


const webAppUrl = 'https://www.google.ru/webhp?tab=rw'

const createVacancyUrl = 'https://hh.ru/auth/employer?backurl=%2Femployer%2Fvacancy%2Fcreate&from=employer_index_content&hhtmFromLabel=employer_index_content&hhtmFrom=employer_main'
const createResumeUrl = 'https://hh.ru/account/signup?backurl=%2Fapplicant%2Fresumes%2Fnew&hhtmFrom=main&hhtmFromLabel=header'




const bot = new TelegramBot(token, {polling: true});

const {choseRole, employerRole, hiredRole, } = require('./options')

const start = () => {
    bot.setMyCommands([
        {command: '/start', description:'Регистрация'},
        {command: '/info', description:'Получить информацию о пользователе'},

    ])

    bot.on('message', async (msg: Message) => {
        const text = msg.text;
        const chatId = msg.chat.id;
        const userId = msg.from?.id
        const firstName = msg.from?.first_name;
        const lastName = msg.from?.last_name;
        const username = msg.from?.username;
        const isBot = msg.from?.is_bot;
        const language = msg.from?.language_code;

        if (text === '/start') {
            return await bot.sendMessage(chatId, `Привет! Я HR bot. Ты наниматель или кандидат?`, choseRole);
        }
        if (text === '/info') {
            await bot.sendMessage(chatId, `Информация о тебе: 
            ID: ${userId}; 
            First Name: ${firstName}; 
            Last Name: ${lastName}; 
            Username: ${username};  
            IsBot: ${isBot}; 
            Language code: ${language}`);
        }
        if (text === 'Привет') {
            return await bot.sendMessage(chatId, `Ну привет, ${firstName} )`);
        }
        // return bot.sendMessage(chatId, 'Я пока не знаю что ответить... Выбери сообщение из предложенных или перезапусти меня командой /start')
    });

    bot.on('callback_query', async (cbq: CallbackQuery) => {
        const data = cbq.data;
        const chatId = cbq.message?.chat.id;

        if (data === 'Я наниматель') {
            return await bot.sendMessage(chatId, `Отлично! Какого специалиста будем искать?`, employerRole);
        }
        if (data === 'Я кандидат') {
            return await bot.sendMessage(chatId, `Отлично! Выбери свою специальность?`, hiredRole);
        }

        if (data === 'Ищу Backend Developer') {
            return await bot.sendMessage(chatId, `Чудно! Теперь давай создадим вакансию или заполним описание сообщенем`, {
                reply_markup: {
                    inline_keyboard:[
                        [{text: 'Опубликовать вакансию', web_app:{url: createVacancyUrl}}]
                    ]
                }
            })
        }
        if (data === 'Ищу Frontend Developer') {
            return await bot.sendMessage(chatId, `Чудно! Теперь давай создадим вакансию или заполним описание сообщенем`, {
                reply_markup: {
                    inline_keyboard:[
                        [{text: 'Опубликовать вакансию', web_app:{url: createVacancyUrl}}]
                    ]
                }
            })
        }
        if (data === 'Ищу Fullstack Developer') {
            return await bot.sendMessage(chatId, `Чудно! Теперь давай создадим вакансию или заполним описание сообщенем`, {
                reply_markup: {
                    inline_keyboard:[
                        [{text: 'Опубликовать вакансию', web_app:{url: createVacancyUrl}}]
                    ]
                }
            })
        }
        if (data === 'Ищу QA Engineer') {
            return await bot.sendMessage(chatId, `Чудно! Теперь давай создадим вакансию или заполним описание сообщенем`, {
                reply_markup: {
                    inline_keyboard:[
                        [{text: 'Опубликовать вакансию', web_app:{url: createVacancyUrl}}]
                    ]
                }
            })
        }
        if (data === 'Ищу Android Developer') {
            return await bot.sendMessage(chatId, `Чудно! Теперь давай создадим вакансию или заполним описание сообщенем`, {
                reply_markup: {
                    inline_keyboard:[
                        [{text: 'Опубликовать вакансию', web_app:{url: createVacancyUrl}}]
                    ]
                }
            })
        }
        if (data === 'Ищу iOS Developer') {
            return await bot.sendMessage(chatId, `Чудно! Теперь давай создадим вакансию или заполним описание сообщенем`, {
                reply_markup: {
                    inline_keyboard:[
                        [{text: 'Опубликовать вакансию', web_app:{url: createVacancyUrl}}]
                    ]
                }
            })
        }
        if (data === 'Ищу Data Scientist') {
            return await bot.sendMessage(chatId, `Чудно! Теперь давай создадим вакансию или заполним описание сообщенем`, {
                reply_markup: {
                    inline_keyboard:[
                        [{text: 'Опубликовать вакансию', web_app:{url: createVacancyUrl}}]
                    ]
                }
            })
        }
        if (data === 'Ищу Data Analyst') {
            return await bot.sendMessage(chatId, `Чудно! Теперь давай создадим вакансию или заполним описание сообщенем`, {
                reply_markup: {
                    inline_keyboard:[
                        [{text: 'Опубликовать вакансию', web_app:{url: createVacancyUrl}}]
                    ]
                }
            })
        }
        if (data === 'Ищу DevOps Engineer') {
            return await bot.sendMessage(chatId, `Чудно! Теперь давай создадим вакансию или заполним описание сообщенем`, {
                reply_markup: {
                    inline_keyboard:[
                        [{text: 'Опубликовать вакансию', web_app:{url: createVacancyUrl}}]
                    ]
                }
            })
        }
        if (data === 'Ищу UI/UX Designer') {
            return await bot.sendMessage(chatId, `Чудно! Теперь давай создадим вакансию или заполним описание сообщенем`, {
                reply_markup: {
                    inline_keyboard:[
                        [{text: 'Опубликовать вакансию', web_app:{url: createVacancyUrl}}]
                    ]
                }
            })
        }
        if (data === 'Ищу Recruiter/HR-manager') {
            return await bot.sendMessage(chatId, `Чудно! Теперь давай создадим вакансию или заполним описание сообщенем`, {
                reply_markup: {
                    inline_keyboard:[
                        [{text: 'Опубликовать вакансию', web_app:{url: createVacancyUrl}}]
                    ]
                }
            })
        }
        if (data === 'Ищу Project Manager') {
            return await bot.sendMessage(chatId, `Чудно! Теперь давай создадим вакансию или заполним описание сообщенем`, {
                reply_markup: {
                    inline_keyboard:[
                        [{text: 'Опубликовать вакансию', web_app:{url: createVacancyUrl}}]
                    ]
                }
            })
        }
        if (data === 'Я Backend Developer') {
            return await bot.sendMessage(chatId, `Чудно! Теперь давай создадим резюме или пришли его в виде файла`, {
                reply_markup: {
                    inline_keyboard:[
                        [{text: 'Создать резюме', web_app:{url: createResumeUrl}}]
                    ]
                }
            })
        }
        if (data === 'Я Frontend Developer') {
            return await bot.sendMessage(chatId, `Чудно! Теперь давай создадим резюме или пришли его в виде файла`, {
                reply_markup: {
                    inline_keyboard:[
                        [{text: 'Создать резюме', web_app:{url: createResumeUrl}}]
                    ]
                }
            })
        }
        if (data === 'Я Fullstack Developer') {
            return await bot.sendMessage(chatId, `Чудно! Теперь давай создадим резюме или пришли его в виде файла`, {
                reply_markup: {
                    inline_keyboard:[
                        [{text: 'Создать резюме', web_app:{url: createResumeUrl}}]
                    ]
                }
            })
        }
        if (data === 'Я QA Engineer') {
            return await bot.sendMessage(chatId, `Чудно! Теперь давай создадим резюме или пришли его в виде файла`, {
                reply_markup: {
                    inline_keyboard:[
                        [{text: 'Создать резюме', web_app:{url: createResumeUrl}}]
                    ]
                }
            })
        }
        if (data === 'Я Android Developer') {
            return await bot.sendMessage(chatId, `Чудно! Теперь давай создадим резюме или пришли его в виде файла`, {
                reply_markup: {
                    inline_keyboard:[
                        [{text: 'Создать резюме', web_app:{url: createResumeUrl}}]
                    ]
                }
            })
        }
        if (data === 'Я iOS Developer') {
            return await bot.sendMessage(chatId, `Чудно! Теперь давай создадим резюме или пришли его в виде файла`, {
                reply_markup: {
                    inline_keyboard:[
                        [{text: 'Создать резюме', web_app:{url: createResumeUrl}}]
                    ]
                }
            })
        }
        if (data === 'Я Data Scientist') {
            return await bot.sendMessage(chatId, `Чудно! Теперь давай создадим резюме или пришли его в виде файла`, {
                reply_markup: {
                    inline_keyboard:[
                        [{text: 'Создать резюме', web_app:{url: createResumeUrl}}]
                    ]
                }
            })
        }
        if (data === 'Я Data Analyst') {
            return await bot.sendMessage(chatId, `Чудно! Теперь давай создадим резюме или пришли его в виде файла`, {
                reply_markup: {
                    inline_keyboard:[
                        [{text: 'Создать резюме', web_app:{url: createResumeUrl}}]
                    ]
                }
            })
        }
        if (data === 'Я DevOps Engineer') {
            return await bot.sendMessage(chatId, `Чудно! Теперь давай создадим резюме или пришли его в виде файла`, {
                reply_markup: {
                    inline_keyboard:[
                        [{text: 'Создать резюме', web_app:{url: createResumeUrl}}]
                    ]
                }
            })
        }
        if (data === 'Я UI/UX Designer') {
            return await bot.sendMessage(chatId, `Чудно! Теперь давай создадим резюме или пришли его в виде файла`, {
                reply_markup: {
                    inline_keyboard:[
                        [{text: 'Создать резюме', web_app:{url: createResumeUrl}}]
                    ]
                }
            })
        }
        if (data === 'Я Recruiter/HR-manager') {
            return await bot.sendMessage(chatId, `Чудно! Теперь давай создадим резюме или пришли его в виде файла`, {
                reply_markup: {
                    inline_keyboard:[
                        [{text: 'Создать резюме', web_app:{url: createResumeUrl}}]
                    ]
                }
            })
        }
        if (data === 'Я Project Manager') {
            return await bot.sendMessage(chatId, `Чудно! Теперь давай создадим резюме или пришли его в виде файла`, {
                reply_markup: {
                    inline_keyboard:[
                        [{text: 'Создать резюме', web_app:{url: createResumeUrl}}]
                    ]
                }
            })
        }
    })
}

start()