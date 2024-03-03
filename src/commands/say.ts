import { CommandStructure, ParamaterTypes } from "../@types";

export default <CommandStructure> {
    commandSetter: {
        name: "say",
        description: "Repete a mensagem (Testes).",
        options: [
            {
                name: "mensagem",
                description: "Mensagem a ser repetida",
                type: ParamaterTypes.String,
                required: true
            }
        ]
    },
    result(event) {
        event.reply(event.options.get("mensagem")?.value as string);
    }
}