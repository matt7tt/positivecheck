import { solutionGroups } from '@/lib/solution-catalog'

export function SolutionInterestOptions() {
  return <>
    <option value="">Select a solution</option>
    {solutionGroups.map(group => <optgroup key={group.name} label={group.name}>
      {group.items.map(item => <option key={item.interest} value={item.interest}>{item.name}</option>)}
    </optgroup>)}
    <option value="other">Other / not sure yet</option>
  </>
}
