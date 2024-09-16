export class Tag{
    static readonly Angular=new Tag('Angular','red');
    static readonly Typescript=new Tag('Typescript','brown');
    static readonly javascript=new Tag('javascript','orange')
    static readonly HTML=new Tag('HTML','yellow');
    static readonly CSS=new Tag('CSS','voilet');
    static readonly JAVA=new Tag('JAVA','green');
    static readonly RPA=new Tag('RPA','blue');
    private constructor(private readonly key:string, public readonly color:string){

    }
    toString(){
        return this.key;
    }

}