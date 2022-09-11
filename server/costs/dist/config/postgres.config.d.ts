export declare const pgConfig: (() => {
    dialect: string;
    logging: boolean;
    host: string;
    port: number;
    username: string;
    password: string;
    database: string;
    autoLoadEntities: boolean;
    senchronize: boolean;
}) & import("@nestjs/config").ConfigFactoryKeyHost<{
    dialect: string;
    logging: boolean;
    host: string;
    port: number;
    username: string;
    password: string;
    database: string;
    autoLoadEntities: boolean;
    senchronize: boolean;
}>;
