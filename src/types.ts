import { DMMF } from '@prisma/client/runtime';
import AwaitEventEmitter from 'await-event-emitter';
import { Project, SourceFile } from 'ts-morph';

import { createConfig } from './helpers/create-config';

export { DMMF };

export type InputType = DMMF.InputType;
export type FieldLocation = DMMF.FieldLocation;
export type OutputType = DMMF.OutputType;
export type SchemaField = DMMF.SchemaField;
export type SchemaEnum = DMMF.SchemaEnum;
export type Model = DMMF.Model;

export type FieldOutputType = SchemaField['outputType'];

export type TypeRecord = Partial<{
    /**
     * TypeScript field/property type
     * @type {string}
     */
    fieldType: string;
    fieldModule: string;
    graphqlType: string;
    graphqlModule: string;
}>;

export type GeneratorConfiguration = ReturnType<typeof createConfig>;

export type EventArguments = {
    models: Map<string, Model>;
    modelNames: string[];
    /**
     * Special output types (Mutation, Query) will be processed later
     * in generation aggregate inputs.
     */
    queryOutputTypes: OutputType[];
    config: GeneratorConfiguration;
    project: Project;
    output: string;
    getSourceFile(args: { type: string; name: string }): SourceFile;
    eventEmitter: AwaitEventEmitter;
    typeNames: Set<string>;
    enums: Record<string, DMMF.DatamodelEnum | undefined>;
    context: Record<string, any>;
};
