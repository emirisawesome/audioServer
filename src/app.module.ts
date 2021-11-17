import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { ServeStaticModule } from "@nestjs/serve-static";
import { join } from "path";
import { FileModule } from "./file/file.module";
import { TrackModule } from "./track/track.module";
import * as path from 'path';

@Module({
    imports: [
        ServeStaticModule.forRoot({ rootPath: path.resolve(__dirname, 'static') }),
        MongooseModule.forRoot('mongodb://localhost/music'),
        TrackModule,
        FileModule
    ]
})
export class AppModule { }