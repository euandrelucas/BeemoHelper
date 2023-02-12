import {
    ApplicationCommandType,
    ChatInputCommandInteraction
} from "discord.js";
import Language from "../../../../lib/classes/Language.js";
import ExtendedClient from "../../../../lib/extensions/ExtendedClient.js";
import ApplicationCommand from "../../../../lib/classes/ApplicationCommand.js";

export default class Ping extends ApplicationCommand {
    /**
     * Create our ping command.
     * @param client Our extended client.
     */
    constructor(client: ExtendedClient) {
        super(client, {
            options: {
                name: "ping",
                description: `Pong! Get the current ping / latency of ${client.config.botName}.`,
                type: ApplicationCommandType.ChatInput
            }
        });
    }

    /**
     * Run this application command.
     * @param interaction The interaction to run this command on.
     * @param language The language to use when replying to the interaction.
     */
    public override async run(
        interaction: ChatInputCommandInteraction,
        language: Language
    ) {
        // const message = await interaction.reply({
        //     content: language.get("PING"),
        //     fetchReply: true,
        //     ephemeral: true
        // });

        // const hostLatency =
        //     message.createdTimestamp - interaction.createdTimestamp;
        // const apiLatency = Math.round(this.client.ws.ping);

        // return interaction.editReply({
        //     content: language.get("PONG", {
        //         apiLatency,
        //         hostLatency,
        //         roundTrip: hostLatency + apiLatency
        //     })
        // });

        return interaction.reply({
            embeds: [
                {
                    description:
                        "Server Raided: **depression's antidote | mental health ・ anime chat help stickers art vc** (`925264080250494977`)\n\nRaid Size: **5,365 accounts**\n\nFull Log: **https://logs.beemo.gg/antispam/m7n77t0GTDH6**",
                    footer: {
                        text: "Note that the accounts associated with this raid are being banned but that large raids may take a while due to Discord ratelimits."
                    },
                    author: {
                        name: "Userbot raid detected by antispam",
                        icon_url:
                            "https://cdn.discordapp.com/avatars/515067662028636170/47e5abaedee90b70a37826ee3d7435e6.png?size=1024"
                    }
                }
            ]
        });
    }
}
