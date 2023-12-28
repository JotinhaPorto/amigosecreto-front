export const formatCpf = (cpf: string) => {
    return cpf.replace(/\.|-/gm, '')
}