domains_file = 'domains.txt'
all_endings_ts_file = 'src/app/etc/allEndings.ts'

# path = ['src', 'app', 'etc', 'allEndings.ts']
with open(domains_file) as f:
    lines = f.readlines()

domains = [lines[index].strip() for index in range(0, len(lines), 2)]
domains_with_ts_syntax = [f'    "{domain}",\n' for domain in domains]

with open(all_endings_ts_file, "w+") as ts:
    ts.writelines(
        ['export const allDomainEndings = [', *domains_with_ts_syntax, '];'])
