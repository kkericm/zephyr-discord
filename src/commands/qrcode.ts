import { CommandStructure, ParamaterTypes } from "../@types";
import qrcode from "qrcode";

export default <CommandStructure> {
    commandSetter: {
        name: "qrcode",
        description: "Cria um QrCode.",
        options: [
            {
                name: "conteúdo",
                description: "Conteúdo do QrCode",
                type: ParamaterTypes.String,
                required: true
            }
        ]
    },
    result(event) {
        qrcode.toBuffer(event.options.get("conteúdo")?.value as string, (err, buff) => {
            event.reply({files: [buff]});
        });
    }
}