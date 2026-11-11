import password from "../../assets/password.jpg"
import phishing from "../../assets/phishing.jpg"
import se from "../../assets/social-engineering (1).jpg"
import malware from "../../assets/malware.jpg"
import privacy from "../../assets/privacy.jpg"
import ne from "../../assets/network-security.jpg"

const lekcija = [
{
    id: 1,
    naslov: "Password Security",
    opis: "Protecting Your Accounts Starts With Your Passwords",
    opis2: "The Stolen Password",
    del: "Password",
    slika: password,
    sodrzina: `Passwords are one of the most basic forms of protection for your online accounts. However, a password is only useful if it is difficult for someone else to guess or obtain.

Many people still use simple passwords based on their name, birthday, favorite team, or other personal information. Attackers can sometimes discover this information from social media and use it to guess passwords.

What makes a password secure?

A strong password should be:

Long: Aim for at least 12 characters.
Unique: Don't use the same password for multiple important accounts.
Hard to guess: Avoid names, birthdays, phone numbers, or common words.
Unpredictable: Avoid patterns such as Password123! or Qwerty123.

For example:

❌ Demian2606!
This contains personal information and follows a predictable pattern.

✅ A long, unique passphrase that does not contain information about you.

Never reuse important passwords

Using the same password for multiple accounts creates a chain reaction.

Imagine that you use the same password for your email, Instagram and another website. If that website suffers a data breach and your password is leaked, attackers may try the same password on your other accounts.

This technique is known as credential stuffing.

That's why your most important accounts should always have unique passwords.

Use Two-Factor Authentication

Even a strong password can potentially be stolen. Two-Factor Authentication (2FA) provides another layer of protection.

Instead of only using your password, you may also need:

A verification code
An authentication app
A security key
Your fingerprint or face

If an attacker gets your password, 2FA can make it much harder for them to access your account.

What should you do?

🔑 Use unique passwords for important accounts.
🔐 Make passwords long and difficult to guess.
📱 Enable 2FA wherever possible.
🗝️ Consider using a password manager to securely store your passwords.

Key takeaway:

A password should be something only you know, and every important account should have its own.`
},
{
    id: 2,
    naslov:"Phishing",
    opis: "Don't Let a Message Trick You",
    opis2: "The Fake Account Warning",
    del:"Phishing",
    slika: phishing,
    sodrzina:`Phishing is one of the most common ways attackers try to steal information from people.

Instead of directly attacking your device, a phishing attack tries to trick you into doing something.

An attacker might send you an email, SMS or social media message that looks like it came from a legitimate organization.

For example:

Your bank account has been suspended. Click here within 30 minutes to restore access.

The message may contain a link leading to a fake website designed to steal your username and password.

Why does phishing work?

Phishing messages often use psychological pressure.

Attackers may create:

🚨 Urgency
"Act now or your account will be deleted."

😨 Fear
"We detected suspicious activity."

🎁 Curiosity
"You won a prize!"

💰 Opportunity
"Claim your reward."

The goal is to make you react before you stop and think.

Learn to recognize the warning signs

Be suspicious when a message:

Creates an unusual sense of urgency.
Asks for your password or financial information.
Contains an unexpected attachment.
Comes from an unfamiliar sender.
Contains a suspicious link.
Offers something that seems too good to be true.
Contains unusual wording or unexpected requests.
Always check the link

A link may look legitimate while actually leading somewhere completely different.

Before entering sensitive information, check the website address.

If you receive a message from your bank, for example, don't automatically use the link in the message. Instead, open your banking application yourself or manually visit the bank's official website.

What should you do?

If you receive a suspicious message:

STOP → CHECK → VERIFY

Don't click immediately.

Check the sender, examine the URL and verify the request through an official channel.

Key takeaway:

Don't trust a message just because it looks professional. Verify before you act.`
},
{
    id: 3,
    naslov:"Social Engineering",
    opis: "Sometimes the Target Is You",
    opis2: "The Urgent Call",
    del:"Social Engineering",
    slika: se,
    sodrzina:`Cybersecurity isn't only about protecting computers. Sometimes, attackers target people themselves.

Social engineering is the use of manipulation and deception to convince someone to reveal information, send money, provide access, or perform an action.

An attacker might pretend to be:

A bank employee
Your manager
Technical support
A government official
A delivery company
A friend or family member
The psychology behind the attack

Social engineering attacks often exploit emotions.

Attackers may try to create:

Fear

"Your account has been compromised."

Urgency

"You need to do this right now."

Authority

"I'm calling from your bank."

Trust

"I'm your coworker. I just need this information."

The attacker wants you to stop thinking critically.

Verify before you trust

If someone asks for sensitive information, don't automatically believe them.

Ask yourself:

Who is this person?
Why do they need this information?
Can I verify their identity?
Does the request make sense?
Why are they pressuring me?

If someone claims to be from your bank, don't use the phone number or link they provide. Find the official contact information yourself and contact the organization directly.

Be careful with unusual requests

Imagine you receive a message from someone who appears to be your friend:

"Hey, I'm having an emergency. Can you send me money right now? Don't call me."

Even if the profile looks familiar, verify the request through another method.

A simple phone call could reveal that the account was actually compromised.

What should you remember?

STOP → THINK → VERIFY

Don't allow urgency or authority to replace verification.

Key takeaway:

Trust should be earned through verification, not created through pressure.`
},
{
    id: 4,
    naslov:"Network Security",
    opis: "Your Connection Matters",
    opis2: "The Wi-Fi Trap",
    del:"Network Security",
    slika: ne,
    sodrzina:`Every time your phone or computer connects to the internet, it communicates through a network.

Some networks are more trustworthy than others.

Your home network is usually under your control, while public networks can be used by many unknown people.

Be careful with public Wi-Fi

Public Wi-Fi can be found in:

☕ Cafés
✈️ Airports
🏨 Hotels
🏫 Universities
🛍️ Shopping centers

The biggest problem isn't simply that a network is public. The problem is that you may not know who operates it or how securely it is configured.

You may also encounter fake networks created to look like legitimate ones.

For example:

Airport_Free_WiFi

could look completely normal, but you should verify the network name before connecting.

Avoid sensitive activities on untrusted networks

Be especially careful when using public Wi-Fi for:

Online banking
Financial transactions
Changing important passwords
Accessing highly sensitive information

When possible, use a trusted connection or your mobile data for sensitive activities.

Secure your home network

Your router is the gateway between your devices and the internet.

You should:

Change the router's default administrator password.
Use a strong Wi-Fi password.
Use WPA2 or WPA3 security.
Keep your router firmware updated.
Disable unnecessary features.
Don't automatically trust every network

Turn off automatic connection to unknown Wi-Fi networks.

Before connecting, check that the network is legitimate.

If you're in a café, hotel or university, ask staff for the correct network name rather than guessing.

Key takeaway:

Don't connect automatically. Know what network you're joining and protect the network you control.`
},
{
    id: 5,
    naslov:"Privacy",
    opis: "Your Personal Information Has Value",
    opis2: "Too Much Information",
    del:"Privacy",
    slika: privacy,
    sodrzina:`Privacy means controlling what information about you is collected, shared and visible to others.

You may not realize how much information you reveal online.

A social media profile could potentially reveal:

📍 Your location
🎂 Your birthday
🏫 Your school
💼 Your workplace
👥 Your friends
🏠 Where you live
✈️ When you're traveling

Individually, these pieces of information may seem harmless. Together, they can create a detailed picture of you.

Think before you post

Before sharing something publicly, ask:

Who can see this?

and

Could this information be used against me?

Avoid publicly sharing highly sensitive information such as:

Your home address
Phone number
Personal documents
Financial information
Passwords
Your exact location in real time
Review your social media privacy settings

Take some time to check:

Who can see your posts?
Who can contact you?
Who can see your friends or followers?
Is your profile public?
Can strangers find you using your phone number or email?

Your privacy settings shouldn't be something you configure once and forget.

Be careful with location sharing

Sharing your current location can reveal where you are right now.

For example, posting:

"Finally on vacation! 🏖️"

while you're away from home can reveal that your home may currently be empty.

Consider sharing travel photos after you return instead of while you're away.

Check app permissions

Apps may request access to:

📷 Camera
🎤 Microphone
📍 Location
👥 Contacts
🖼️ Photos

Ask yourself:

"Does this app really need this permission?"

If an application doesn't need access to something, consider denying the permission.

Key takeaway:

You don't have to share everything online just because you can.`
},
{
    id: 6,
    naslov:"Malware",
    opis: "Malicious Software Can Hide in Plain Sight",
    opis2:"The Free Download",
    del:"Malware",
    slika: malware,
    sodrzina:`Malware is software designed to perform harmful or unauthorized actions on a device.

It can be used to:

Steal information
Monitor your activity
Damage files
Lock your data
Steal passwords
Give attackers access to your device
Common types of malware

Virus
Malicious software that can spread and interfere with files or systems.

Trojan
Malware disguised as legitimate software.

Spyware
Software that secretly monitors activity or collects information.

Ransomware
Malware that can encrypt or lock files and demand payment.

Keylogger
Software that records keystrokes and can potentially capture sensitive information.

How does malware get onto your device?

Common methods include:

📧 Malicious email attachments
🔗 Dangerous links
💿 Cracked or pirated software
📥 Untrusted downloads
🌐 Malicious websites
💬 Malicious messages

One important rule is:

Know where your software and files come from.

A program downloaded from an unofficial website may have been modified to contain malware.

Updates are important

Operating system and application updates don't only add new features.

They often fix security vulnerabilities.

If you postpone updates indefinitely, you may leave known security weaknesses unpatched.

Enable automatic updates when appropriate and install security updates regularly.

Protect your files

Even careful users can become victims of malware.

That's why backups are important.

Keep backups of important files in a separate location so that you can recover them if your device is damaged or your files are encrypted.

What should you do?

✅ Download software from trusted sources.
✅ Keep your operating system updated.
✅ Keep applications updated.
✅ Be careful with unexpected attachments.
✅ Avoid cracked or suspicious software.
✅ Maintain backups of important files.

Key takeaway:

Don't give malicious software an easy way into your device. Check what you download, what you open, and where it came from.`
}
]
export default lekcija