# Sicredi Play — levantamento de dados e roteiro para a Maia

**Objetivo:** verificar se um quiz curto no TikTok gera novas contas elegíveis e ativas entre jovens de 18 a 25 anos, a um custo aceitável. O MVP web demonstra a jornada; ainda não mede abertura real, preferência por bancos ou retorno financeiro.

## Mensagem pronta para a Maia

> Oi, Maia! Estamos preparando uma proposta de piloto do Sicredi Play: um quiz de educação financeira para jovens de 18 a 25 anos, com encaminhamento para abertura de conta no canal oficial do Sicredi. Você consegue encaminhar as perguntas abaixo para a equipe de dados? A prioridade é validar o número de 15%, entender o funil atual de abertura e saber se dá para medir contas abertas e ativadas por campanha. Uma extração agregada, sem dados pessoais, é suficiente. Se algum indicador não existir, pode nos indicar a área responsável ou a melhor aproximação?

## Perguntas para o Sicredi

| Prioridade | Pergunta | Recorte e uso |
|---|---|---|
| P0 | Quantos associados PF têm 18–25 anos? Qual a proporção na base PF total e na base PF ativa? Os ~15% mencionados correspondem a qual universo? | Pedir contagens, referência temporal, abrangência nacional e praça candidata; manter os dois denominadores separados. |
| P0 | Quantos novos associados PF de 18–25 entraram por mês? Qual a participação nas novas adesões? | Últimos 24 meses; separar novas adesões, reativações e duplicidades; comparar com total PF e 26–34. |
| P0 | Quantos iniciam, enviam, são aprovados e concluem a abertura? Em qual etapa desistem? | Por canal, praça e idade. Pedir numeradores, denominadores e motivos de abandono disponíveis. |
| P0 | O que é uma conta ativa no Sicredi? Quantas contas novas ativam até D30 e seguem ativas em D90? | Coortes com janela completa. Acordar evento de ativação antes do teste; exemplo: primeira movimentação elegível. |
| P0 | É possível atribuir abertura e ativação a um identificador de campanha? | Confirmar encaminhamento autorizado, deduplicação, janela de atribuição e retorno agregado de eventos. |
| P0 | Qual cooperativa tem volume, fluxo digital e equipe para pilotar? Qual custo por ativação seria aceitável? | Pedir benchmark por canal e campanhas anteriores, com metodologia e componentes de custo. |
| P1 | Qual o custo de adquirir e atender essa coorte? Como evoluem margem e perdas de crédito? | Coortes comparáveis em idade, região e tempo de relacionamento; evitar inferir risco ou lucro a partir da idade. |
| P1 | Quais barreiras de adesão já foram medidas? | Pedir estudos de marca, motivos de não abertura, barreiras de acesso e segmentação de alcance do TikTok institucional, se disponível. |
| P1 | Quem aprova oferta, atendimento e entrega do brinde? | Definir elegibilidade, limite por pessoa, estoque, custo, entrega, tratamento de dúvidas e responsabilidade de cada área. |

**Formato sugerido:** planilha agregada, com mês de referência, praça/cooperativa, canal, faixa etária, estágio do funil, contagem e denominador. Solicitar dicionário de indicadores e indicação de lacunas; evitar células pequenas que possam expor pessoas. Pedir idade na data de adesão para coortes e na data de referência para fotografia da base.

## O que já encontramos em fontes públicas

- **9,7 milhões de associados em 2025**, no Brasil, conforme a série do [Relatório Anual 2025 do Sicredi, p. 6](https://www.sicredi.com.br/media/coop/filer_public/2026/04/02/relatorio_anual_2025_site.pdf). O total não valida os ~15% de 18 a 25 anos. Não aplicar esse percentual ao total sem confirmar se os universos coincidem.
- **65% jogaram online e 86% assistiram a vídeos, programas, filmes ou séries online**, entre usuários de internet de 16 a 24 anos. [TIC Domicílios 2025, C7](https://cetic.br/pt/tics/domicilios/2025/individuos/C7/expandido/).
- **67% fizeram consultas, pagamentos ou outras transações financeiras online e 88% pagaram ou transferiram por Pix**, no mesmo recorte de internautas. [TIC Domicílios 2025, C6](https://cetic.br/pt/tics/domicilios/2025/individuos/C6/expandido/). Esses dados não medem banco principal, uso do TikTok nem o recorte exato de 18 a 25 anos.
- O [TikTok lista o Brasil entre os mercados de Mini Games](https://developers.tiktok.com/docs/en/mini-games-overview) e documenta [âncoras em vídeos](https://developers.tiktok.com/docs/en/mini-games-technical-overview). Confirmar elegibilidade do caso, possibilidade de encaminhamento externo e [revisão da plataforma](https://developers.tiktok.com/docs/en/acceptance-testing-guidlines). Se houver mídia paga, consultar a [política de anúncios para serviços financeiros](https://ads.tiktok.com/resources/help/article/tiktok-ads-policy-financial-services?lang=pt), inclusive o recorte adulto e os requisitos aplicáveis no Brasil.

## O que pesquisar a seguir

| Pergunta | Fonte ou método | Limite |
|---|---|---|
| Que parcela tem conta e usa pagamentos digitais? | [Global Findex 2025](https://www.worldbank.org/en/publication/globalfindex/report), recorte Brasil e idade disponível; TIC Domicílios para hábitos online. | Conta ou Pix não identifica o banco principal; faixas etárias podem divergir. |
| Quantos jovens usam banco digital como principal? | Pesquisa com residentes de 18–25 nas praças candidatas. Perguntar todas as instituições usadas, qual é a principal e para quê. Classificar instituições com regra explícita e separar principal de uso eventual. | Amostra de conveniência serve para explorar barreiras, não para estimar o Brasil. Para estimar proporção, definir amostragem, ponderação e incerteza. |
| Quantos não são cooperados e poderiam aderir? | Combinar estimativa local de população 18–25, critérios de elegibilidade e base PF agregada; comparar a mesma praça e data. | Não ter conta no Sicredi não significa preferir concorrente nem estar disposto a abrir. |
| Por que escolheram outra instituição? | Perguntar se conhecem o Sicredi, se já consideraram abrir conta e motivo principal: facilidade, taxas, confiança, benefícios, acesso ou outro. Entrevistas ajudam a entender as respostas. | Separar falta de conhecimento, preferência e desistência na abertura. |
| O TikTok e o brinde mudam o resultado? | Dados agregados do perfil do Sicredi e teste comparável com chamada sem quiz; se houver volume, testar também com e sem incentivo aprovado. | Visualização, clique e conclusão são etapas intermediárias, não contas. |

**Perguntas mínimas do questionário:** idade e município; instituições usadas nos últimos 30 dias; instituição mais usada para pagamentos ou recebimentos; tem conta no Sicredi?; conhecia ou já considerou abrir?; qual o principal motivo da escolha?; em que condições consideraria abrir?; usa TikTok e com que frequência? Oferecer “nenhuma” e “prefiro não responder” quando pertinente.

## Como medir sem confundir os denominadores

- **Participação jovem na base:** associados PF de 18–25 ÷ todos os associados PF, na mesma data.
- **Penetração na praça:** associados PF de 18–25 residentes na praça ÷ população elegível de 18–25 na praça, com datas e critérios compatíveis.
- **Preferência por banco digital:** respondentes de 18–25 que indicam um banco digital como principal ÷ respondentes elegíveis com resposta válida. Reportar separadamente o uso simultâneo e a parcela sem conta.
- **Oportunidade comercial:** medir diretamente quantos não são cooperados, usam um banco digital como principal e considerariam o Sicredi. Não chamar toda a população fora da base de “perda”, nem subtrair 15% de 100% para estimar mercado.
- **Resultado do piloto:** contas elegíveis abertas e ativadas em D30, comparadas com uma campanha equivalente sem quiz. Custo por ativação incremental = custo adicional do teste ÷ ativações adicionais estimadas, quando o ganho for positivo e interpretável. Acompanhar D90 antes de decidir a escala.

**Sequência recomendada:** a Maia valida a base e indica uma praça; marketing e tecnologia confirmam a entrada pelo TikTok e a medição até a abertura; a equipe fecha o orçamento, a regra do brinde e a meta de sucesso antes do lançamento.
