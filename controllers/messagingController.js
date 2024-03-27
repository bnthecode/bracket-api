import twilio from 'twilio'
import Tournament from '../models/Tournament.js';



const accountSid = 'AC980f1319a17e4c1a968e9a96e6295d26';
const authToken = '36027a7d3865784e6d9fbccd0b409c48';
const client = new twilio(accountSid, authToken);


export const handleSendMessageOnRegister = async (phone_number, tournament_name) => {
    try {
        if(phone_number){
            client.messages.create({
                body: `Brackets: Thank you for registering. Your tournament updates will come from here. Reply STOP at any time to no longer receive updates.`,
                to: phone_number,
                from: '+13369996965'
        
            })   
        }
 
    }
    catch(error) {
        console.log(error.message)
    }



}

export const handleSendMessageOnStart = async () => {
    //         console.log('..................sending out starting vibes..............................')
    //         const client = new twilio(accountSid, authToken);
    //     const tournament = await Tournament.findById(tournamentId);








    //     let messages = []
    //     tournament.send_updates_to.forEach((updateObject, idx ) => {



    //                 if(updateObject.send ) {

    //                     messages.push({     body: 'Brandon has started the tournament. Hang on for dear life.',
    //                     to:  updateObject.phone, 
    //                     from:  '+13369996965'})

    //                 }

    // });

    //     const unique = [...new Map(messages.map((m) => [m.to, m])).values()];

    //     unique.map((msg) => {
    //         client.messages.create({
    //             ...msg
    //         })
    //     })


}


export const handleSendMessageOnMatchUpdate = async (tournament_id) => {
    //     try {
    //         const client = new twilio(accountSid, authToken);
    //     const tournament = await Tournament.findById(tournamentId);
    // const matchesAvailable = tournament.matches.filter(match => !match.done && !match.in_progress).sort((a, b) => {
    //     const { match_name: name1 } = a;
    //     const { match_name: name2 } = b;
    //     const sortable1 = name1.split(' ')[1];
    //     const sortable2 = name2.split(' ')[1];
    //     return sortable1 - sortable2;
    //   });;
    //   const firstAvailable = matchesAvailable[0]
    // const nextMatch = matchesAvailable[1];



    // if(nextMatch) {



    // const player1Next = nextMatch.players[0];


    // const player2Next = nextMatch.players[1];




    //     let messages = []
    //     tournament.send_updates_to.forEach((updateObject, idx ) => {

    //         // if(player1Next && player2Next) {
    //         //     const [p1fn ] = player1Next.name.split(' ');
    //         //     const [p2fn ] = player2Next.name.split(' ');
    //         //     if(player1Next.name === updateObject.name) {


    //         //         if(updateObject.send ) {
    //         //             console.log(`sending message to ${player1Next.name}`)
    //         //             messages.push({     body: `${p1fn},\nYour match against ${player2Next.name} is coming up soon.`,
    //         //             to:  updateObject.phone, 
    //         //             from:  '+13369996965'})

    //         //         }
    //         //     } 
    //         //     if(player2Next.name === updateObject.name) {


    //         //         if(updateObject.send) {
    //         //             console.log(`sending message to ${player2Next.name}`)
    //         //             messages.push({      body: `${p2fn},\nYour match against ${player1Next.name} is coming up soon.`,
    //         //             to:  updateObject.phone, 
    //         //             from:  '+13369996965'})


    //         //         }
    //         //     } 
    //         // }


    //         const player1UpNext=firstAvailable.players[0]
    //         const player2UpNext=firstAvailable.players[1]

    // if(player1UpNext && player2UpNext) {

    //     const [p1fn ] = player1UpNext.name.split(' ');
    //     const [p2fn ] = player2UpNext.name.split(' ');
    //         if(player1UpNext.name === updateObject.name) {
    //             if(updateObject.send ) {
    //                 console.log(`sending message to ${player1UpNext.name}`)
    //                 messages.push({
    //                     body: `${p1fn},\nYou & ${player2UpNext.name} will be on the next available table.`,
    //                     to:  updateObject.phone, 
    //                     from:  '+13369996965'
    //                 })


    //             }
    //         } 
    //         if(player2UpNext.name === updateObject.name) {

    //             if(updateObject.send) {
    //                 console.log(`sending message to ${player2UpNext.name}`)
    //                 messages.push({
    //                     body: `${p2fn},\nYou & ${player1UpNext.name} will be on the next available table.`,
    //                     to:  updateObject.phone, 
    //                     from:  '+13369996965'
    //                 })
    //             }
    //         } 
    //     }

    //     })
    //     const unique = [...new Map(messages.map((m) => [m.to, m])).values()];

    //     unique.map((msg) => {
    //         client.messages.create({
    //             ...msg
    //         })
    //     })

    // }


    // }    catch(error) {
    //     console.log('error sending', error.message)
    // }

}

export const handleIncomingMessage = async (req, res) => {
    //     try {
    // // 65ba200a6666536018ac4027

    // const tournament = await Tournament.findById(tournamentId);

    // const foundPlayer = tournament.tournament_players.find(( player) => player.name.trim().toLowerCase() === (req.body.Body.trim().toLowerCase()));
    // const playerAlreadyRegistered = tournament.checked_in_players.find(p => p.trim().toLowerCase()  === req.body.Body.trim().toLowerCase())

    // // const client = new twilio(accountSid, authToken);







    // const twiml = new twilio.twiml.MessagingResponse();

    // if(req.body.Body.trim().toLowerCase() === "stop")    {
    //     const foundItems = tournament.send_updates_to.filter((item => item.phone !== req.body.From));

    //         tournament.send_updates_to = foundItems
    // // tournament.send_updates_to = [ ...tournament.send_updates_to ,{ name: item.name, player_id: item.player_id, phone: item.phone, send: true}]


    //     await tournament.save()

    //     return
    // }
    // if(req.body.Body.trim().toLowerCase() === "start") {
    //     const foundItems = tournament.send_updates_to.filter((item => item.phone === req.body.From));
    //     const otherOnes = tournament.send_updates_to.filter((item => item.phone !== req.body.From));
    //     foundItems.map((item ) => {
    //         tournament.send_updates_to.push({ name: item.name, player_id: item.player_id, phone: item.phone, send: true})
    // // tournament.send_updates_to = [ ...tournament.send_updates_to ,{ name: item.name, player_id: item.player_id, phone: item.phone, send: true}]

    //     })


    // await tournament.save()
    // return
    //  }



    // if(req.body.Body.trim().toLowerCase() === "yes")    {
    //         const foundItems = tournament.send_updates_to.filter((item => item.phone === req.body.From));
    //         const otherOnes = tournament.send_updates_to.filter((item => item.phone !== req.body.From));
    //         foundItems.map((item ) => {
    //             tournament.send_updates_to.push({ name: item.name, player_id: item.player_id, phone: item.phone, send: true})
    // // tournament.send_updates_to = [ ...tournament.send_updates_to ,{ name: item.name, player_id: item.player_id, phone: item.phone, send: true}]

    //         })

    //         await tournament.save()
    //         twiml.message(`You have opted in to receive notifications from Brandon's Brackets. We will text you a reminder before you are scheduled to play. Reply STOP at any point to unsubscribe.`);
    //         res.type('text/xml').send(twiml.toString());
    //         console.log('subbing for updates')
    //         return
    //     }


    // if(foundPlayer && playerAlreadyRegistered) {


    //     twiml.message(`Hello, ${foundPlayer.name.trim()}! You are already checked in to this tournament.`);
    //     res.type('text/xml').send(twiml.toString());
    //     return
    // }

    // if(foundPlayer && !playerAlreadyRegistered) {
    //     tournament.checked_in_players.push(foundPlayer.name);
    //     tournament.send_updates_to.push({ name: foundPlayer.name, phone: req.body.From, player_id: foundPlayer._id })
    //     tournament.save()
    //     twiml.message(`Hello, ${foundPlayer.name.trim()}! You successfully checked in to ${tournament.tournament_name}. Respond with YES to receive notifications about your upcoming matches. Reply STOP at any point to unsubscribe.`);
    //     res.type('text/xml').send(twiml.toString());
    //     console.log(`${req.body.Body} checked in`)
    //     return
    // }
    // else {
    //     console.log(`${req.body.Body} had an issue checking in`)
    //     if(req.body.Body.split(' ').length === 2) {
    //     twiml.message(`Hmmm, we were unable to find you in the tournament list, are you sure "${req.body.Body.trim()}" is the name you used to register? Please be sure to register prior to checking in (QR Code on main display). If you have problems checking in/registering, let Brandon know and he will get you added to the tournament.`);
    //     res.type('text/xml').send(twiml.toString());
    //       }
    //       else { twiml.message(`We can't process your input. Please see Brandon if you need assistance.`);
    //       res.type('text/xml').send(twiml.toString());
    //     }
    //     }

    //     }
    //     catch(error) {
    //         console.log(error.message)
    //     }

}