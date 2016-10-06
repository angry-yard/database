import {ITypeConvertor} from "./interfaces/ITypeConvertor";

export class TypeConvertor implements ITypeConvertor {
    constructor(private databaseType: string) {
    }

    toJavascriptType = (): string => {
        var name = "";

        switch (this.databaseType) {
            case "int":
                name = "number";
                break;
            case "varchar":
            case "nvarchar":
                name = "string";
                break;
            case "smalldatetime":
                name = "Date";
                break;
            case "bit":
                name = "boolean";
                break;
        }

        return name;
    };

    toDatabaseType = (): string => {
        return this.databaseType;
    };

    toCSharpType = (): string => {
        var name = "";

        switch (this.databaseType) {
            case "int":
                name = "int";
                break;
            case "bit":
                name = "bool";
                break;
            case "nvarchar":
            case "varchar":
                name = "string";
                break;
            case "datetime":
            case "smalldatetime":
                name = "DateTime";
                break;
        }

        return name;
    };
}