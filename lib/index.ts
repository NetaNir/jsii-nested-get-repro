import * as cdk from '@aws-cdk/core';


export enum MyEnum {
  ENUM_VALUE = 'I_DONT_KNOW'
}

export interface MyType {
  readonly enumProperty: MyEnum;
}

export class MyConsturct extends cdk.Construct {
  public readonly complexProperty: MyInnerConstruct;
  constructor(scope: cdk.Construct, id: string) {
    super(scope, id);
    this.complexProperty = new MyInnerConstruct(this, 'MyInnerConstruct');
  }
}

export class MyInnerConstruct extends cdk.Construct {
  public static readonly staticProperty: MyType = {
    enumProperty: MyEnum.ENUM_VALUE
  }

  constructor(scope: cdk.Construct, id: string) {
    super(scope, id);
  }
}
