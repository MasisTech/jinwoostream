window.OneSignal = window.OneSignal || [];
OneSignal.push(function() {
    OneSignal.init({
        appId: "68e251f4-2524-48ad-8fb5-6c0c244a4746",
        safari_web_id: "web.onesignal.auto.42873e37-42b9-4e5d-9423-af83e9e44ff4",
        welcomeNotification: {
            message: 'Hore, notifikasi untuk JinwooStream sudah aktif!'
        },
        notifyButton: {
            enable: true,
            /* Required to use the Subscription Bell */
            /* SUBSCRIPTION BELL CUSTOMIZATIONS START HERE */
            size: 'small',
            /* One of 'small', 'medium', or 'large' */
            theme: 'default',
            /* One of 'default' (red-white) or 'inverse" (white-red) */
            position: 'bottom-left',
            /* Either 'bottom-left' or 'bottom-right' */
            offset: {
                bottom: '50px',
                left: '12.5px',
                /* Only applied if bottom-left */
                right: '0px' /* Only applied if bottom-right */
            },
            showCredit: false,
            /* Hide the OneSignal logo */
            text: {
                'tip.state.unsubscribed': 'Ayo aktifin notifikasi!',
                'tip.state.subscribed': "Kamu udah aktifin notifikasi!",
                'tip.state.blocked': "Kamu ngeblokir notifikasi, nih :(",
                'message.prenotify': 'Klik di sini buat aktifin notifikasi!',
                'message.action.subscribed': "Makasih udah aktifin notifikasi!",
                'message.action.resubscribed': "Kamu udah aktifin notifikasi!",
                'message.action.unsubscribed': "Kamu nggak bakal nerima notifikasi lagi, deh :(",
                'dialog.main.title': 'Atur Notifikasi',
                'dialog.main.button.subscribe': 'AKTIFKAN',
                'dialog.main.button.unsubscribe': 'MATIKAN',
                'dialog.blocked.title': 'Buka Blokir Notifikasi',
                'dialog.blocked.message': "Kamu harus ngebuka blokir notifikasi untuk JinwooStream dari pengaturan browser kamu supaya bisa aktifin notifikasi lagi!"
            },
            colors: { // Customize the colors of the main button and dialog popup button
                'circle.background': '#E53637',
                'circle.foreground': 'white',
                'badge.background': '#E53637',
                'badge.foreground': 'white',
                'badge.bordercolor': 'white',
                'pulse.color': 'white',
                'dialog.button.background.hovering': 'rgb(77, 101, 113)',
                'dialog.button.background.active': 'rgb(70, 92, 103)',
                'dialog.button.background': 'rgb(84,110,123)',
                'dialog.button.foreground': 'white'
            },
            /* HIDE SUBSCRIPTION BELL WHEN USER SUBSCRIBED */
            displayPredicate: function() {
                return OneSignal.isPushNotificationsEnabled()
                    .then(function(isPushEnabled) {
                        /* The user is subscribed, so we want to return "false" to hide the Subscription Bell */
                        return !isPushEnabled;
                    });
            },
        },
        promptOptions: {
            slidedown: {
                prompts: [{
                    type: "push", // current types are "push" & "category"
                    autoPrompt: true,
                    text: {
                        /* limited to 90 characters */
                        actionMessage: "Apa kamu mau dapetin notifikasi update terbaru dari JinwooStream?",
                        /* acceptButton limited to 15 characters */
                        acceptButton: "Mau, dong!",
                        /* cancelButton limited to 15 characters */
                        cancelButton: "Nggak mau!"
                    },
                    delay: {
                        pageViews: 1,
                        timeDelay: 10
                    }
                }]
            },
            customlink: {
                enabled: false,
                /* Required to use the Custom Link */
                style: "button",
                /* Has value of 'button' or 'link' */
                size: "small",
                /* One of 'small', 'medium', or 'large' */
                color: {
                    button: '#E53637',
                    /* Color of the button background if style = "button" */
                    text: '#FFFFFF',
                    /* Color of the prompt's text */
                },
                text: {
                    subscribe: "Hidupin Notifikasi",
                    /* Prompt's text when not subscribed */
                    unsubscribe: "Matiin Notifikasi",
                    /* Prompt's text when subscribed */
                    // explanation: "Kamu akan menerima notifikasi update terbaru dari JinwooStream!", /* Optional text appearing before the prompt button */
                },
                unsubscribeEnabled: false,
                /* Controls whether the prompt is visible after subscription */
            }
        },
        persistNotification: true,
        autoResubscribe: true
    });
});