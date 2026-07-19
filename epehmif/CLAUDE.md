@AGENTS.md

# Pipeline d'agents — Agence Web Bambym

Trois agents spécialisés transforment un brief client en site web complet, en pipeline séquentiel. Chaque agent s'auto-évalue et s'améliore avant de passer le travail au suivant. Définitions : [.claude/agents/content-agent.md](.claude/agents/content-agent.md), [.claude/agents/ux-ui-agent.md](.claude/agents/ux-ui-agent.md), [.claude/agents/dev-agent.md](.claude/agents/dev-agent.md).

## Pipeline de travail

1. **Brief client** → `content-agent`
2. **Contenu structuré** → `ux-ui-agent`
3. **Spécifications UX/UI** → `dev-agent`
4. **Site web déployable** → Netlify

## Agents futurs (roadmap)

À ajouter ultérieurement : Agent QA/Test, Agent SEO/Audit, Agent Commercial, Agent Prospection, Agent Suivi Client, Agent Maintenance, Agent Admin/Facturation, Agent Veille, Agent Formation Client.

## Notes d'utilisation

- Adapter les briefs client au format attendu par `content-agent`
- Chaque agent s'améliore itérativement avant de passer le travail
- Les agents rapportent clairement les blocages ou demandes de clarification
