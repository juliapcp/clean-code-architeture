
export default class CPF {
    sCPF = '';
    constructor(sCPF: string) {
        this.sCPF = sCPF;
    }
    removeMascara(): void {
        this.sCPF = this.sCPF
            .split('.').join('')
            .split('-').join('')
            .split(' ').join('');
    }
    isTamanhoInvalido(): boolean {
        return (this.sCPF.length < 11 || this.sCPF.length > 14);
    }
    isNumerosIguais(): boolean {
        return this.sCPF.split("").every(sNumero => sNumero === this.sCPF[0])
    }
    calculaDigitoVerificador(sParteCPF: string): string {
        let nAcumulador: number = 0
        let nMultiplicador = sParteCPF.length + 1
        for (let ind = 0; ind < sParteCPF.length ; ind++) {
            let digito = parseInt(sParteCPF.substring(ind, ind + 1));
            nAcumulador += (nMultiplicador * digito)
            nMultiplicador--
        };
        let resto = nAcumulador % 11
        return (resto < 2) ? '0' : (11 - resto).toString();
    }
    getDigitoVerificadorAtual(): string {
        return this.sCPF.substring(this.sCPF.length - 2, this.sCPF.length);
    }

    isValido(): boolean {
        if (this.sCPF == null || undefined) return false;
        if (this.isTamanhoInvalido()) return false;
        this.removeMascara();
        if (this.isNumerosIguais()) return false;
        let noveDigitosCPF = this.sCPF.substring(0, 9);
        let primeiroDV = this.calculaDigitoVerificador(noveDigitosCPF);
        let segundoDV = this.calculaDigitoVerificador(noveDigitosCPF.concat(primeiroDV));
        return this.getDigitoVerificadorAtual() === primeiroDV.concat(segundoDV);
    }
}
