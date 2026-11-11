const napadi = {
    Password: {

        start: {
            tekst: "🔐 10:42 PM — You receive a security alert: \"Someone just tried to sign in to your account from another country.\" What do you do?",
            opcii: [
                { tekst: "🔎 Check the recent login activity", sledno: "password_1" , tocnost: "da"},
                { tekst: "😴 Ignore it and check tomorrow", sledno: "password_bad1" , tocnost: "ne"}
            ]
        },

        password_1: {
            tekst: "⚠️ You find a login attempt from a device you've never seen before. The login was unsuccessful. What do you do?",
            opcii: [
                { tekst: "🔑 Change my password immediately", sledno: "password_2" , tocnost: "da"},
                { tekst: "👀 Keep monitoring the account for now", sledno: "password_bad2" , tocnost: "ne"}
            ]
        },

        password_2: {
            tekst: "🔑 You're changing your password and realize that you use the same password on two other websites.",
            opcii: [
                { tekst: "🔐 Create unique passwords for those accounts", sledno: "password_3" , tocnost: "da"},
                { tekst: "➡️ Change it only on this account", sledno: "password_bad3", tocnost: "ne" }
            ]
        },

        password_3: {
            tekst: "🛡️ Your new password is unique. The account still doesn't have two-factor authentication enabled.",
            opcii: [
                { tekst: "📱 Enable 2FA", sledno: "password_4", tocnost: "da" },
                { tekst: "🤔 Leave it because the password is strong", sledno: "password_bad4" , tocnost: "ne"}
            ]
        },

        password_4: {
            tekst: "🎯 The attacker tries the old leaked password on one of your other accounts. The login succeeds.",
            opcii: [
                { tekst: "🚨 Secure that account immediately", sledno: "password_5", tocnost: "da" },
                { tekst: "🙈 Ignore it because my main account is protected", sledno: "password_bad5" , tocnost: "ne"}
            ]
        },

        password_5: {
            tekst: "🧠 You need another password. Which one would you choose?",
            opcii: [
                { tekst: "🔒 A long, unique password with no personal information", sledno: "password_good" , tocnost: "da"},
                { tekst: "🎂 My name and birthday with a few numbers", sledno: "password_bad6", tocnost: "ne" }
            ]
        },

        password_bad1: {
            tekst: "⏰ The next morning, you discover several password reset emails. Someone has been trying to take control of your account.",
            opcii: [
                { tekst: "🚨 Secure the account now", sledno: "password_1" , tocnost: "da"},
                { tekst: "🗑️ Delete the emails and keep using the account", sledno: "password_bad7" , tocnost: "ne"}
            ]
        },

        password_bad2: {
            tekst: "🎯 The attacker tries the same password again later. You still haven't changed it.",
            opcii: [
                { tekst: "🔑 Change the password now", sledno: "password_2" , tocnost: "da"},
                { tekst: "⏳ Wait for another warning before acting", sledno: "password_bad7" , tocnost: "ne"}
            ]
        },

        password_bad3: {
            tekst: "💥 The attacker uses the leaked password on another website and gets access.",
            opcii: [
                { tekst: "🔐 Change the passwords on your other accounts", sledno: "password_3" , tocnost: "da"},
                { tekst: "🙅 Change nothing because those accounts are less important", sledno: "password_bad7", tocnost: "ne" }
            ]
        },

        password_bad4: {
            tekst: "⚠️ Your password may be strong, but it is still the only barrier protecting your account.",
            opcii: [
                { tekst: "📱 Enable 2FA", sledno: "password_4", tocnost: "da" },
                { tekst: "👍 Keep the account as it is", sledno: "password_bad7" , tocnost: "ne"}
            ]
        },

        password_bad5: {
            tekst: "🚨 The attacker now has access to another account using the same old password.",
            opcii: [
                { tekst: "🔄 Change that password immediately", sledno: "password_5", tocnost: "da" },
                { tekst: "😶 Ignore it because the account isn't important", sledno: "password_bad7", tocnost: "ne" }
            ]
        },

        password_bad6: {
            tekst: "🎯 The attacker finds your birthday and name on social media and uses them to guess the password.",
            opcii: [
                { tekst: "🔒 Create an unpredictable password", sledno: "password_good", tocnost: "da" },
                { tekst: "🔢 Add more numbers to the same password", sledno: "password_bad7" , tocnost: "ne"}
            ]
        },

        password_bad7: {
            tekst: "💥 The attacker has gained access to one of your accounts. Your previous decisions made the attack easier.",
            opcii: [
                { tekst: "🚨 Start securing the remaining accounts", sledno: "password_good", tocnost: "da" },
                { tekst: "❌ Do nothing and continue using them", sledno: "password_end_bad", tocnost: "ne" }
            ]
        },

        password_good: {
            tekst: "🛡️ ATTACK STOPPED! You used unique passwords and additional protection to prevent one compromised password from becoming access to multiple accounts.",
            opcii: []
        },

        password_end_bad: {
            tekst: "💀 ACCOUNT TAKEOVER! The attacker successfully used your weak password habits to gain access to multiple accounts.",
            opcii: []
        }
    },
    Phishing: {

        start: {
            tekst: "📧 8:17 AM — You receive an email: \"URGENT! Your account will be suspended today. Verify your identity now.\" What do you do?",
            opcii: [
                { tekst: "🔎 Check who actually sent the email", sledno: "phishing_1", tocnost: "da" },
                { tekst: "🔗 Click the link to fix the problem quickly", sledno: "phishing_bad1", tocnost: "ne" }
            ]
        },

        phishing_1: {
            tekst: "👀 The sender name looks familiar, but the email address contains a strange extra letter. What now?",
            opcii: [
                { tekst: "🌐 Open the official website separately", sledno: "phishing_2" , tocnost: "da"},
                { tekst: "💬 Reply to the email and ask if it's legitimate", sledno: "phishing_bad2", tocnost: "ne" }
            ]
        },

        phishing_2: {
            tekst: "🌐 You open the official website yourself. There is no warning about your account. The email also contains an attachment.",
            opcii: [
                { tekst: "🗑️ Report and delete the email", sledno: "phishing_3" , tocnost: "da"},
                { tekst: "📎 Open the attachment to see what it contains", sledno: "phishing_bad3", tocnost: "ne" }
            ]
        },

        phishing_3: {
            tekst: "📱 A few minutes later, another message arrives: \"Your account requires immediate verification.\" It contains a login link.",
            opcii: [
                { tekst: "🔐 Open the service through its official app", sledno: "phishing_4" , tocnost: "da"},
                { tekst: "🔗 Use the link but check whether it has HTTPS", sledno: "phishing_bad4" , tocnost: "ne"}
            ]
        },

        phishing_4: {
            tekst: "🎭 The official app shows that your account is completely fine. The original email was definitely suspicious.",
            opcii: [
                { tekst: "🚨 Report the phishing attempt", sledno: "phishing_good", tocnost: "da" },
                { tekst: "📧 Keep the email in case you need it later", sledno: "phishing_bad5", tocnost: "ne" }
            ]
        },

        phishing_bad1: {
            tekst: "🎭 The link takes you to a login page that looks almost identical to the real one. It asks for your email and password.",
            opcii: [
                { tekst: "🚪 Close the page and open the official website", sledno: "phishing_1", tocnost: "da" },
                { tekst: "🔐 Enter the password because the page looks legitimate", sledno: "phishing_bad6", tocnost: "ne" }
            ]
        },

        phishing_bad2: {
            tekst: "🎣 Someone replies pretending to be customer support and asks you to confirm your account details.",
            opcii: [
                { tekst: "🛑 Stop replying and use official support", sledno: "phishing_2" , tocnost: "da"},
                { tekst: "📋 Send only the information they requested", sledno: "phishing_bad6", tocnost: "ne" }
            ]
        },

        phishing_bad3: {
            tekst: "🦠 The attachment attempts to run malicious content on your device.",
            opcii: [
                { tekst: "🛑 Close it and report the email", sledno: "phishing_3" , tocnost: "da"},
                { tekst: "▶️ Allow it because I want to see the document", sledno: "phishing_bad6", tocnost: "ne" }
            ]
        },

        phishing_bad4: {
            tekst: "⚠️ The page uses HTTPS. However, HTTPS does not prove that the website belongs to the real company.",
            opcii: [
                { tekst: "🚪 Leave the page and use the official app", sledno: "phishing_4" , tocnost: "da"},
                { tekst: "🔐 Enter my password because the connection is secure", sledno: "phishing_bad6" , tocnost: "ne"}
            ]
        },

        phishing_bad5: {
            tekst: "⚠️ Keeping the suspicious message means you could accidentally interact with it later.",
            opcii: [
                { tekst: "🗑️ Delete and report it", sledno: "phishing_good" , tocnost: "da"},
                { tekst: "📂 Keep it and open the attachment later", sledno: "phishing_bad6" , tocnost: "ne"}
            ]
        },

        phishing_bad6: {
            tekst: "💥 Your credentials may have been sent directly to the attacker. The fake page was designed to steal them.",
            opcii: [
                { tekst: "🔑 Change the password and secure the account", sledno: "phishing_good", tocnost: "da" },
                { tekst: "😰 Keep using the account and hope nothing happens", sledno: "phishing_end_bad", tocnost: "ne" }
            ]
        },

        phishing_good: {
            tekst: "🛡️ PHISHING STOPPED! You verified the sender, avoided suspicious links and used official channels instead.",
            opcii: []
        },

        phishing_end_bad: {
            tekst: "💀 CREDENTIALS STOLEN! The attacker successfully captured your login information through the fake page.",
            opcii: []
        }
    },
    "Social Engineering": {

        start: {
            tekst: "📞 2:35 PM — Someone calls claiming to be from your bank. They know your name and say your account is being attacked.",
            opcii: [
                { tekst: "🔎 Ask questions to verify who they are", sledno: "social_1", tocnost: "ne" },
                { tekst: "📵 End the call and contact the bank yourself", sledno: "social_2" , tocnost: "da"}
            ]
        },

        social_1: {
            tekst: "🎭 The caller answers confidently and asks for the verification code sent to your phone.",
            opcii: [
                { tekst: "🔐 Give them the code to stop the supposed attack", sledno: "social_bad1", tocnost: "ne" },
                { tekst: "📵 Refuse and contact the bank directly", sledno: "social_2", tocnost: "da" }
            ]
        },

        social_2: {
            tekst: "🏦 The bank confirms the call was fake. Later, a message arrives from your friend's account: \"I urgently need €100. Please don't call me.\"",
            opcii: [
                { tekst: "📞 Call my friend using another method", sledno: "social_3", tocnost: "da" },
                { tekst: "💸 Send the money because it came from their account", sledno: "social_bad2" , tocnost: "ne"}
            ]
        },

        social_3: {
            tekst: "📱 Your friend tells you their account was hacked. Just then, someone claiming to be IT support contacts you.",
            opcii: [
                { tekst: "🔎 Verify the request through official support", sledno: "social_4", tocnost: "da" },
                { tekst: "💻 Let them remotely check my computer", sledno: "social_bad3", tocnost: "ne" }
            ]
        },

        social_4: {
            tekst: "🚨 The real support team says they never contacted you. The caller now says: \"You have 2 minutes before your computer is locked.\"",
            opcii: [
                { tekst: "🛑 End the call and verify independently", sledno: "social_good", tocnost: "da" },
                { tekst: "😰 Give them access because it sounds urgent", sledno: "social_bad4", tocnost: "ne" }
            ]
        },

        social_bad1: {
            tekst: "💥 The attacker now has the verification code they needed.",
            opcii: [
                { tekst: "📵 Contact the bank immediately and secure the account", sledno: "social_2", tocnost: "da" },
                { tekst: "⏳ Wait to see what happens", sledno: "social_bad5" , tocnost: "ne"}
            ]
        },

        social_bad2: {
            tekst: "💸 The money is sent. Your friend later confirms they never asked for it.",
            opcii: [
                { tekst: "🔎 Report the compromised account", sledno: "social_3" , tocnost: "da"},
                { tekst: "🙈 Ignore it because the money is already gone", sledno: "social_bad5", tocnost: "ne" }
            ]
        },

        social_bad3: {
            tekst: "🖥️ The caller now has remote access to your computer.",
            opcii: [
                { tekst: "🛑 Disconnect the session immediately", sledno: "social_4", tocnost: "da" },
                { tekst: "💬 Stay connected and ask what they're doing", sledno: "social_bad5", tocnost: "ne" }
            ]
        },

        social_bad4: {
            tekst: "🧠 The attacker is using fear and urgency to make you act without thinking.",
            opcii: [
                { tekst: "🛑 End the call and verify through official channels", sledno: "social_good", tocnost: "da" },
                { tekst: "😰 Follow their instructions before time runs out", sledno: "social_bad5", tocnost: "ne" }
            ]
        },

        social_bad5: {
            tekst: "🚨 The attacker continues because you haven't independently verified the situation.",
            opcii: [
                { tekst: "🔎 Stop and verify everything independently", sledno: "social_good", tocnost: "da" },
                { tekst: "➡️ Continue following the caller's instructions", sledno: "social_end_bad", tocnost: "ne" }
            ]
        },

        social_good: {
            tekst: "🛡️ MANIPULATION STOPPED! You recognized pressure, urgency and false authority before giving away information or access.",
            opcii: []
        },

        social_end_bad: {
            tekst: "💀 SOCIAL ENGINEERING SUCCESSFUL! The attacker used trust and pressure to manipulate you into giving access or information.",
            opcii: []
        }
    },
    "Network Security": {

        start: {
            tekst: "☕ 11:20 AM — You're at a café and see two Wi-Fi networks: 'Cafe_WiFi' and 'Cafe_Free_WiFi'. Both have full signal.",
            opcii: [
                { tekst: "👤 Ask the staff which network is official", sledno: "network_1", tocnost: "da" },
                { tekst: "📶 Connect to the one with the stronger signal", sledno: "network_bad1", tocnost: "ne" }
            ]
        },

        network_1: {
            tekst: "📡 The staff confirms 'Cafe_WiFi' is official. Your phone asks: 'Automatically connect to similar networks in the future?'",
            opcii: [
                { tekst: "🛡️ Disable automatic connections", sledno: "network_2" , tocnost: "da"},
                { tekst: "⚡ Allow it for convenience", sledno: "network_bad2" , tocnost: "ne"}
            ]
        },

        network_2: {
            tekst: "📱 Later, your phone automatically connects to a familiar-looking network you don't recognize.",
            opcii: [
                { tekst: "📴 Disconnect and use mobile data", sledno: "network_3", tocnost: "da" },
                { tekst: "💬 Stay connected because I'm only checking a message", sledno: "network_bad3" , tocnost: "ne"}
            ]
        },

        network_3: {
            tekst: "🏠 At home, you check your router settings and discover the administrator password is still the default one.",
            opcii: [
                { tekst: "🔑 Change the administrator password", sledno: "network_4" , tocnost: "da"},
                { tekst: "🤷 Leave it because my Wi-Fi password is strong", sledno: "network_bad4" , tocnost: "ne"}
            ]
        },

        network_4: {
            tekst: "🛡️ Your router is now using a unique administrator password. You notice remote administration is enabled.",
            opcii: [
                { tekst: "🔒 Disable remote administration if I don't need it", sledno: "network_good", tocnost: "da" },
                { tekst: "🌐 Keep it enabled because it may be useful later", sledno: "network_bad5", tocnost: "ne" }
            ]
        },

        network_bad1: {
            tekst: "⚠️ A strong signal doesn't tell you who operates the network.",
            opcii: [
                { tekst: "🔎 Verify the network with the staff", sledno: "network_1" , tocnost: "da"},
                { tekst: "📶 Stay connected because it seems normal", sledno: "network_bad3", tocnost: "ne" }
            ]
        },

        network_bad2: {
            tekst: "🚨 Your device can now automatically connect to networks you haven't verified.",
            opcii: [
                { tekst: "🛡️ Disable automatic connections", sledno: "network_2" , tocnost: "da"},
                { tekst: "⚡ Keep it enabled for convenience", sledno: "network_bad3" , tocnost: "ne"}
            ]
        },

        network_bad3: {
            tekst: "👀 Your device is communicating through an unknown network.",
            opcii: [
                { tekst: "📴 Disconnect from the network", sledno: "network_3" , tocnost: "da"},
                { tekst: "💬 Continue using it for simple tasks", sledno: "network_bad5" , tocnost: "ne"}
            ]
        },

        network_bad4: {
            tekst: "🔓 The router administrator password is separate from your Wi-Fi password. The default password may be publicly known.",
            opcii: [
                { tekst: "🔑 Change the administrator password", sledno: "network_4" , tocnost: "da"},
                { tekst: "👍 Keep it because the Wi-Fi password is strong", sledno: "network_bad5", tocnost: "ne" }
            ]
        },

        network_bad5: {
            tekst: "🚨 The router has an unnecessary remote access point exposed to the internet.",
            opcii: [
                { tekst: "🔒 Disable remote administration", sledno: "network_good" , tocnost: "da"},
                { tekst: "🌐 Keep it enabled and deal with it later", sledno: "network_end_bad", tocnost: "ne" }
            ]
        },

        network_good: {
            tekst: "🛡️ NETWORK SECURED! You verified networks, prevented automatic connections and strengthened your router security.",
            opcii: []
        },

        network_end_bad: {
            tekst: "💀 NETWORK COMPROMISED! Weak router settings and unsafe network habits gave an attacker an opportunity to reach your device.",
            opcii: []
        }
    },
    Privacy: {

        start: {
            tekst: "📸 You're on vacation and want to post a photo publicly. The photo shows where you are right now.",
            opcii: [
                { tekst: "⏳ Wait until I leave the location", sledno: "privacy_1", tocnost: "da" },
                { tekst: "📱 Post it now because my exact address isn't visible", sledno: "privacy_bad1" , tocnost: "ne"}
            ]
        },

        privacy_1: {
            tekst: "📱 You install a flashlight app. It asks for access to your camera, microphone, contacts and location.",
            opcii: [
                { tekst: "🔎 Review the permissions first", sledno: "privacy_2", tocnost: "da" },
                { tekst: "✅ Allow everything and remove access later if needed", sledno: "privacy_bad2" , tocnost: "ne"}
            ]
        },

        privacy_2: {
            tekst: "👤 Your social media profile shows your birthday, school, phone number and recent locations publicly.",
            opcii: [
                { tekst: "🔒 Limit who can see this information", sledno: "privacy_3", tocnost: "da" },
                { tekst: "🌐 Keep it public but avoid posting my home address", sledno: "privacy_bad3" , tocnost: "ne"}
            ]
        },

        privacy_3: {
            tekst: "📍 A new app asks to track your location even when you aren't using it.",
            opcii: [
                { tekst: "🛡️ Allow location only while using the app", sledno: "privacy_4", tocnost: "da" },
                { tekst: "📡 Allow it because location features can be useful", sledno: "privacy_bad4" , tocnost: "ne"}
            ]
        },

        privacy_4: {
            tekst: "🧩 You receive a quiz online asking for your full name, birthday, phone number and exact location.",
            opcii: [
                { tekst: "🚫 Provide only information that is actually necessary", sledno: "privacy_good" , tocnost: "da"},
                { tekst: "📝 Fill in everything because the quiz looks harmless", sledno: "privacy_bad5" , tocnost: "ne"}
            ]
        },

        privacy_bad1: {
            tekst: "⚠️ Your address isn't visible, but everyone can still see that you're currently away from home.",
            opcii: [
                { tekst: "⏳ Wait until I leave the location", sledno: "privacy_1", tocnost: "da" },
                { tekst: "📸 Post another photo showing more of the trip", sledno: "privacy_bad3", tocnost: "ne" }
            ]
        },

        privacy_bad2: {
            tekst: "👀 The flashlight app now has access to information unrelated to its purpose.",
            opcii: [
                { tekst: "🔒 Remove unnecessary permissions", sledno: "privacy_2", tocnost: "da" },
                { tekst: "👍 Keep them enabled because the app seems trustworthy", sledno: "privacy_bad3" , tocnost: "ne"}
            ]
        },

        privacy_bad3: {
            tekst: "🧩 An attacker can combine your birthday, school, phone number and locations to build a detailed profile about you.",
            opcii: [
                { tekst: "🔒 Reduce the information visible publicly", sledno: "privacy_3", tocnost: "da" },
                { tekst: "📱 Keep everything public but stop posting your address", sledno: "privacy_bad5" , tocnost: "ne"}
            ]
        },

        privacy_bad4: {
            tekst: "📍 The app can now collect your location even when you're not using it.",
            opcii: [
                { tekst: "🛡️ Limit location access", sledno: "privacy_4", tocnost: "da" },
                { tekst: "📡 Leave it enabled because it might be useful", sledno: "privacy_bad5", tocnost: "ne" }
            ]
        },

        privacy_bad5: {
            tekst: "⚠️ You have now shared enough information for someone to build a surprisingly detailed picture of your life.",
            opcii: [
                { tekst: "🔒 Review and remove unnecessary public information", sledno: "privacy_good", tocnost: "da" },
                { tekst: "🤷 Leave it because none of the information is a password", sledno: "privacy_end_bad", tocnost: "ne" }
            ]
        },

        privacy_good: {
            tekst: "🔒 PRIVACY PROTECTED! You reduced unnecessary exposure of your location, personal information and app permissions.",
            opcii: []
        },

        privacy_end_bad: {
            tekst: "💀 PRIVACY BREACH! None of the individual pieces of information seemed dangerous, but together they revealed far more about you than you intended.",
            opcii: []
        }
    },
    Malware: {

        start: {
            tekst: "💻 You need a program for university. The official version costs money, but an unknown website offers a cracked version for free.",
            opcii: [
                { tekst: "🔎 Look for an official free version or trusted alternative", sledno: "malware_1" , tocnost: "da"},
                { tekst: "⬇️ Download it and scan it with antivirus", sledno: "malware_bad1" , tocnost: "ne"}
            ]
        },

        malware_1: {
            tekst: "📧 Later that day, you receive a Word document from an unknown sender. It says: 'IMPORTANT! Enable editing to view this document.'",
            opcii: [
                { tekst: "🔎 Verify the sender before opening it", sledno: "malware_2", tocnost: "da" },
                { tekst: "📂 Open it but keep macros disabled", sledno: "malware_bad2" , tocnost: "ne"}
            ]
        },

        malware_2: {
            tekst: "🔄 Your computer shows an important security update. You're busy and it requires a restart.",
            opcii: [
                { tekst: "🛡️ Install it now or schedule it soon", sledno: "malware_3", tocnost: "da" },
                { tekst: "⏳ Postpone it until later", sledno: "malware_bad3", tocnost: "ne" }
            ]
        },

        malware_3: {
            tekst: "🚨 After the update, your antivirus warns that an unfamiliar program is trying to access your files.",
            opcii: [
                { tekst: "🛑 Block it and investigate where it came from", sledno: "malware_4" , tocnost: "da"},
                { tekst: "✅ Allow it because I installed it recently", sledno: "malware_bad4" , tocnost: "ne"}
            ]
        },

        malware_4: {
            tekst: "🔍 You discover the program came from an unknown website and was installed without you remembering it.",
            opcii: [
                { tekst: "🗑️ Remove it and run a security scan", sledno: "malware_good", tocnost: "da" },
                { tekst: "🤷 Leave it because the antivirus hasn't deleted it", sledno: "malware_bad5", tocnost: "ne" }
            ]
        },

        malware_bad1: {
            tekst: "⚠️ Antivirus scanning can help, but it cannot guarantee that unknown software is safe.",
            opcii: [
                { tekst: "🗑️ Delete it and find a trusted source", sledno: "malware_1" , tocnost: "da"},
                { tekst: "▶️ Install it anyway because the scan found nothing", sledno: "malware_bad5", tocnost: "ne" }
            ]
        },

        malware_bad2: {
            tekst: "📎 Keeping macros disabled helps, but opening an unexpected file is still risky.",
            opcii: [
                { tekst: "🛑 Close it and verify the sender", sledno: "malware_2" , tocnost: "da"},
                { tekst: "▶️ Enable editing because I need to see the document", sledno: "malware_bad5", tocnost: "ne" }
            ]
        },

        malware_bad3: {
            tekst: "⏳ The security vulnerability remains unpatched while you keep postponing the update.",
            opcii: [
                { tekst: "🔄 Install the update now", sledno: "malware_3", tocnost: "da" },
                { tekst: "⏰ Postpone it again", sledno: "malware_bad5" , tocnost: "ne"}
            ]
        },

        malware_bad4: {
            tekst: "⚠️ A recently installed program isn't automatically trustworthy. Something is trying to access your personal files.",
            opcii: [
                { tekst: "🛑 Block it and investigate", sledno: "malware_4" , tocnost: "da"},
                { tekst: "✅ Allow it because I recognize the program name", sledno: "malware_bad5", tocnost: "ne" }
            ]
        },

        malware_bad5: {
            tekst: "🚨 Your device is behaving strangely. Unknown programs are running and your files are becoming difficult to access.",
            opcii: [
                { tekst: "🛑 Disconnect from the internet and run a security scan", sledno: "malware_good", tocnost: "da" },
                { tekst: "🔄 Restart the computer and continue working", sledno: "malware_end_bad" , tocnost: "ne"}
            ]
        },

        malware_good: {
            tekst: "🛡️ DEVICE SECURED! You avoided untrusted software, handled suspicious files carefully and reacted before the malware could spread.",
            opcii: []
        },

        malware_end_bad: {
            tekst: "💀 MALWARE INFECTION! The malicious program gained enough access to disrupt your device and potentially affect your files.",
            opcii: []
        }
    }
};

export default napadi;